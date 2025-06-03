import Cliente from "../models/clienteModel.js";

export async function findAllClientes() {
  return await Cliente.findAll();
}

export async function findClienteById(id) {
  return await Cliente.findByPk(id);
}

export async function createCliente(nome, email, telefone) {
  return await Cliente.create({ nome, email, telefone });
}

export async function updateCliente(id, { nome, email, telefone }) {
  const cliente = await Cliente.findByPk(id);

  if (!cliente) {
    return null;
  }

  await cliente.update({ nome, email, telefone });
  return cliente;
}

export async function deleteCliente(id) {
  const cliente = await Cliente.findByPk(id);

  if (!cliente) {
    return null;
  }

  await cliente.destroy();
  return cliente;
}
