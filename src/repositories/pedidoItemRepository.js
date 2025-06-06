import PedidoItem from "../models/pedidoItemModel.js";
import Produto from "../models/produtoModel.js";
import Pedido from "../models/pedidoModel.js";

export async function findAllPedidoItens() {
  return await PedidoItem.findAll({
    include: [
      {
        model: Produto,
        as: "produto",
        attributes: ["id", "nome", "preco"],
      },
      {
        model: Pedido,
        as: "pedido",
        attributes: ["id", "cliente_id", "status"],
      },
    ],
  });
}

export async function findPedidoItemById(id) {
  return await PedidoItem.findByPk(id, {
    include: [
      {
        model: Produto,
        as: "produto",
        attributes: ["id", "nome", "preco"],
      },
      {
        model: Pedido,
        as: "pedido",
        attributes: ["id", "cliente_id", "status"],
      },
    ],
  });
}

export async function createPedidoItem({
  pedido_id,
  produto_id,
  quantidade,
  preco_unitario,
}) {
  return await PedidoItem.create({
    pedido_id,
    produto_id,
    quantidade,
    preco_unitario,
  });
}

export async function updatePedidoItem(
  id,
  { pedido_id, produto_id, quantidade, preco_unitario }
) {
  const item = await PedidoItem.findByPk(id);
  if (!item) return null;

  await item.update({ pedido_id, produto_id, quantidade, preco_unitario });
  return item;
}

export async function deletePedidoItem(id) {
  const item = await PedidoItem.findByPk(id);
  if (!item) return null;

  await item.destroy();
  return item;
}
