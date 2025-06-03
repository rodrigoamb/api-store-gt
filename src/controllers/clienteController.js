import * as clienteRepository from "../repositories/clienteRepository.js";

//Controlador que busca todos os clientes
export async function getAllClientes(req, res) {
  try {
    const clientes = await clienteRepository.findAllClientes();
    return res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar todos os clientes:", error);
    return res.status(400).json({ message: "Erro ao buscar clientes." });
  }
}

//buscar cliente por ID
export async function getClienteById(req, res) {
  const { id } = req.params;

  try {
    const cliente = await clienteRepository.findClienteById(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json(cliente);
  } catch (error) {
    console.error("Erro ao buscar o cliente pelo id:", error);
    return res.status(400).json({ message: "Erro ao buscar o cliente por id" });
  }
}

//criar um novo cliente
export async function createCliente(req, res) {
  const { nome, email, telefone } = req.body;

  try {
    const cliente = await clienteRepository.createCliente(
      nome,
      email,
      telefone
    );

    return res.status(201).json({
      message: "Cliente criado com sucesso",
      cliente,
    });
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    return res.status(400).json({ message: "Erro ao criar o cliente" });
  }
}

//atualizar o cliente
export async function updateCliente(req, res) {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const cliente = await clienteRepository.updateCliente(id, {
      nome,
      email,
      telefone,
    });

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json({
      message: "Cliente atualizado com sucesso",
      cliente,
    });
  } catch (error) {
    console.error("Erro ao atualizar o cliente", error);
    return res.status(400).json({ message: "Erro ao atualizar o cliente" });
  }
}

//deleta o cliente
export async function deleteCliente(req, res) {
  const { id } = req.params;

  try {
    const cliente = await clienteRepository.deleteCliente(id);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }

    return res.status(200).json({ message: "Cliente deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o cliente", error);
    return res.status(400).json({ message: "Erro ao deletar o cliente" });
  }
}
