import Endereco from "../models/enderecoModel.js";
import Cliente from "../models/clienteModel.js";

export async function findAllEnderecos() {
  return await Endereco.findAll({
    include: {
      model: Cliente,
      as: "cliente",
    },
  });
}

export async function findEnderecoById(id) {
  return await Endereco.findByPk(id, {
    include: {
      model: Cliente,
      as: "cliente",
    },
  });
}

export async function createEndereco({ cliente_id, rua, cidade, estado, cep }) {
  return await Endereco.create({ cliente_id, rua, cidade, estado, cep });
}

export async function updateEndereco(
  id,
  { cliente_id, rua, cidade, estado, cep }
) {
  const endereco = await Endereco.findByPk(id);

  if (!endereco) {
    return null;
  }

  await endereco.update({ cliente_id, rua, cidade, estado, cep });
  return endereco;
}

export async function deleteEndereco(id) {
  const endereco = await Endereco.findByPk(id);

  if (!endereco) {
    return null;
  }

  await endereco.destroy();
  return endereco;
}
