import * as pagamentoRepository from "../repositories/pagamentoRepository.js";

// Buscar todos os pagamentos
export async function getAllPagamentos(req, res) {
  try {
    const pagamentos = await pagamentoRepository.findAllPagamentos();
    return res.json(pagamentos);
  } catch (error) {
    console.error("Erro ao buscar pagamentos:", error);
    return res.status(500).json({ message: "Erro ao buscar pagamentos." });
  }
}

// Buscar pagamento por ID
export async function getPagamentoById(req, res) {
  const { id } = req.params;

  try {
    const pagamento = await pagamentoRepository.findPagamentoById(id);

    if (!pagamento) {
      return res.status(404).json({ message: "Pagamento não encontrado." });
    }

    return res.json(pagamento);
  } catch (error) {
    console.error("Erro ao buscar pagamento:", error);
    return res.status(500).json({ message: "Erro ao buscar pagamento." });
  }
}

// Criar novo pagamento
export async function createPagamento(req, res) {
  const { pedido_id, valor, forma_pagamento, status_pagamento } = req.body;

  try {
    const pagamento = await pagamentoRepository.createPagamento({
      pedido_id,
      valor,
      forma_pagamento,
      status_pagamento,
    });

    return res.status(201).json(pagamento);
  } catch (error) {
    console.error("Erro ao criar pagamento:", error);
    return res.status(400).json({ message: "Erro ao criar pagamento." });
  }
}

// Atualizar pagamento
export async function updatePagamento(req, res) {
  const { id } = req.params;
  const { pedido_id, valor, forma_pagamento, status_pagamento } = req.body;

  try {
    const pagamento = await pagamentoRepository.updatePagamento(id, {
      pedido_id,
      valor,
      forma_pagamento,
      status_pagamento,
    });

    if (!pagamento) {
      return res.status(404).json({ message: "Pagamento não encontrado." });
    }

    return res.json(pagamento);
  } catch (error) {
    console.error("Erro ao atualizar pagamento:", error);
    return res.status(400).json({ message: "Erro ao atualizar pagamento." });
  }
}

// Deletar pagamento
export async function deletePagamento(req, res) {
  const { id } = req.params;

  try {
    const pagamento = await pagamentoRepository.deletePagamento(id);

    if (!pagamento) {
      return res.status(404).json({ message: "Pagamento não encontrado." });
    }

    return res.json({ message: "Pagamento deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar pagamento:", error);
    return res.status(500).json({ message: "Erro ao deletar pagamento." });
  }
}
