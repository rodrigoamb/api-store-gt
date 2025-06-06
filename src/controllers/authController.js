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

    //armazenando cookies no navegador do usuario
    res.cookie("token", token, {
      httpOnly: true, //não permite acessar/editar o cookie do lado do cliente
      secure: false, //em produção, coloque true para que só seja permitido setar o cookie quando a requisicao for https
      sameSite: "lax", //diz como é o modo que o cookie é transferido nas requisições, pode deixa "lax" é seguro.
      maxAge: 7200000, //tempo de vida do cookie
    });

    return res.json({ message: "Login realizado com sucesso" });
  } catch (error) {
    console.error("Erro ao fazer o login", error);
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
}

//logout do usuario
export async function logout(req, res) {
  res.clearCookie("token");
  return res.json({ message: "Logout feito com sucesso." });
}

//perfil do usuario logado
export async function perfil(req, res) {
  const usuarioId = req.user.id;

  try {
    const usuario = await authRepository.findUserById(usuarioId);

    if (!usuario) {
      return res.status(404).json({ message: "usuario nao encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    console.error("erro ao buscar o perfil:", error);
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
}
