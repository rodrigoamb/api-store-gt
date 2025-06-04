import Pedido from "../models/pedidoModel.js";
import Cliente from "../models/clienteModel.js";

export async function findAllPedidos() {
  return await Pedido.findAll({
    include: {
      model: Cliente,
      as: "cliente",
      attributes: ["id", "nome", "email"],
    },
  });
}

export async function findPedidoById(id) {
  return await Pedido.findByPk(id, {
    include: {
      model: Cliente,
      as: "cliente",
      attributes: ["id", "nome", "email"],
    },
  });
}

export async function createPedido({ cliente_id, status }) {
  return await Pedido.create({ cliente_id, status });
}

export async function updatePedido(id, { cliente_id, status }) {
  const pedido = await Pedido.findByPk(id);
  if (!pedido) return null;

  await pedido.update({ cliente_id, status });
  return pedido;
}

export async function deletePedido(id) {
  const pedido = await Pedido.findByPk(id);
  if (!pedido) return null;

  await pedido.destroy();
  return pedido;
}
