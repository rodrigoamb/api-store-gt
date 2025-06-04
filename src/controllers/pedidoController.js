import * as pedidoRepository from "../repositories/pedidoRepository.js";

// Buscar todos os pedidos
export async function getAllPedidos(req, res) {
  try {
    const pedidos = await pedidoRepository.findAllPedidos();
    return res.json(pedidos);
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    return res.status(500).json({ message: "Erro ao buscar pedidos." });
  }
}

// Buscar pedido por ID
export async function getPedidoById(req, res) {
  const { id } = req.params;

  try {
    const pedido = await pedidoRepository.findPedidoById(id);

    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    return res.json(pedido);
  } catch (error) {
    console.error("Erro ao buscar pedido:", error);
    return res.status(500).json({ message: "Erro ao buscar pedido." });
  }
}

// Criar novo pedido
export async function createPedido(req, res) {
  const { cliente_id, status } = req.body;

  try {
    const pedido = await pedidoRepository.createPedido({ cliente_id, status });
    return res.status(201).json(pedido);
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    return res.status(400).json({ message: "Erro ao criar pedido." });
  }
}

// Atualizar pedido
export async function updatePedido(req, res) {
  const { id } = req.params;
  const { cliente_id, status } = req.body;

  try {
    const pedido = await pedidoRepository.updatePedido(id, {
      cliente_id,
      status,
    });

    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    return res.json(pedido);
  } catch (error) {
    console.error("Erro ao atualizar pedido:", error);
    return res.status(400).json({ message: "Erro ao atualizar pedido." });
  }
}

// Deletar pedido
export async function deletePedido(req, res) {
  const { id } = req.params;

  try {
    const pedido = await pedidoRepository.deletePedido(id);

    if (!pedido) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    return res.json({ message: "Pedido deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar pedido:", error);
    return res.status(500).json({ message: "Erro ao deletar pedido." });
  }
}
