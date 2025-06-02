import { findAllClientes } from "../repositories/clienteRepository";

//Controlador que busca todos os clientes
export async function getAllClientes(req, res) {
  try {
    const clientes = await findAllClientes();
    return res.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar todos os clientes:", error);
    return res.status(500).json({ message: "Erro ao buscar clientes." });
  }
}
