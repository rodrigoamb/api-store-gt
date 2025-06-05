import Pagamento from "../models/pagamentoModel.js";
import Pedido from "../models/pedidoModel.js";

export async function findAllPagamentos() {
  return await Pagamento.findAll({
    include: {
      model: Pedido,
      as: "pedido",
      attributes: ["id", "status", "cliente_id"],
    },
  });
}

export async function findPagamentoById(id) {
  return await Pagamento.findByPk(id, {
    include: {
      model: Pedido,
      as: "pedido",
      attributes: ["id", "status", "cliente_id"],
    },
  });
}

export async function createPagamento({
  pedido_id,
  valor,
  forma_pagamento,
  status_pagamento,
}) {
  return await Pagamento.create({
    pedido_id,
    valor,
    forma_pagamento,
    status_pagamento,
  });
}

export async function updatePagamento(
  id,
  { pedido_id, valor, forma_pagamento, status_pagamento }
) {
  const pagamento = await Pagamento.findByPk(id);
  if (!pagamento) return null;

  await pagamento.update({
    pedido_id,
    valor,
    forma_pagamento,
    status_pagamento,
  });
  return pagamento;
}

export async function deletePagamento(id) {
  const pagamento = await Pagamento.findByPk(id);
  if (!pagamento) return null;

  await pagamento.destroy();
  return pagamento;
}
