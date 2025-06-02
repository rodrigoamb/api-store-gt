import Cliente from "../models/clienteModel.js";

export async function findAllClientes() {
  return await Cliente.findAll();
}
