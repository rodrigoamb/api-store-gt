import * as enderecoRepository from "../repositories/enderecoRepository.js";

//Controlador que busca todos os enderecos
export async function getAllEnderecos(req, res) {
  try {
    const enderecos = await enderecoRepository.findAllEnderecos();
    return res.json(enderecos);
  } catch (error) {
    console.error("Erro ao buscar todos os enderecos:", error);
    return res.status(400).json({ message: "Erro ao buscar enderecos." });
  }
}

//buscar endereco por ID
export async function getEnderecoById(req, res) {
  const { id } = req.params;

  try {
    const endereco = await enderecoRepository.findEnderecoById(id);

    if (!endereco) {
      return res.status(404).json({ message: "Endereco não encontrado" });
    }

    return res.status(200).json(endereco);
  } catch (error) {
    console.error("Erro ao buscar o endereco pelo id:", error);
    return res
      .status(400)
      .json({ message: "Erro ao buscar o endereco por id" });
  }
}

//criar um novo endereco
export async function createEndereco(req, res) {
  const { cliente_id, rua, cidade, estado, cep } = req.body;

  try {
    const endereco = await enderecoRepository.createEndereco({
      cliente_id,
      rua,
      cidade,
      estado,
      cep,
    });

    return res.status(201).json({
      message: "Endereco criado com sucesso",
      endereco,
    });
  } catch (error) {
    console.error("Erro ao criar o endereco", error);
    return res.status(400).json({ message: "Erro ao criar o endereco" });
  }
}

//atualizar o endereco
export async function updateEndereco(req, res) {
  const { id } = req.params;
  const { cliente_id, rua, cidade, estado, cep } = req.body;

  try {
    const endereco = await enderecoRepository.updateEndereco(id, {
      cliente_id,
      rua,
      cidade,
      estado,
      cep,
    });

    if (!endereco) {
      return res.status(404).json({ message: "Endereco não encontrado" });
    }

    return res.status(200).json({
      message: "Endereco atualizado com sucesso",
      endereco,
    });
  } catch (error) {
    console.error("Erro ao atualizar o endereco", error);
    return res.status(400).json({ message: "Erro ao atualizar o endereco" });
  }
}

//deleta o endereco
export async function deleteEndereco(req, res) {
  const { id } = req.params;

  try {
    const endereco = await enderecoRepository.deleteEndereco(id);

    if (!endereco) {
      return res.status(404).json({ message: "Endereco não encontrado" });
    }

    return res.status(200).json({ message: "Endereco deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o endereco", error);
    return res.status(400).json({ message: "Erro ao deletar o endereco" });
  }
}
