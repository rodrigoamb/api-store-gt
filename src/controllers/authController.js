import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

//registrar novo usuário
export async function register(req, res) {
  const { nome, email, senha } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    await authRepository.createUser({ nome, email, senhaHash });

    return res.status(201).json({ message: "Usuário criado com sucesso." });
  } catch (error) {
    console.error("Erro ao criar o usuário", error);
    return res.status(400).json({ message: "Erro ao criar o usuário" });
  }
}

//login do usuário
export async function login(req, res) {
  const { email, senha } = req.body;

  try {
    const usuario = await authRepository.findUserByEmail(email);

    if (!usuario) {
      return res
        .status(401)
        .json({ message: "Usuário não encontrado, cadastre-se" });
    }

    //verifica se a senha enviada pelo usuário é equivalente ao hash da senha armazenado no banco
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    //se senhaValida for false, senha é invalida
    if (!senhaValida) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    //criando o token
    const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7200000,
    });

    return res.json({ message: "Login realizado com sucesso" });
  } catch (error) {
    console.error("Erro ao fazer o login", error);
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}
