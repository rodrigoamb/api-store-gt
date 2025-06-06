import * as pedidoItemRepository from "../repositories/pedidoItemRepository.js";

// Buscar todos os itens de pedidos
export async function getAllPedidoItens(req, res) {
  try {
    const itens = await pedidoItemRepository.findAllPedidoItens();
    return res.json(itens);
  } catch (error) {
    console.error("Erro ao buscar itens de pedidos:", error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar itens de pedidos." });
  }
}

// Buscar item de pedido por ID
export async function getPedidoItemById(req, res) {
  const { id } = req.params;

  try {
    const item = await pedidoItemRepository.findPedidoItemById(id);

    if (!item) {
      return res
        .status(404)
        .json({ message: "Item de pedido não encontrado." });
    }

    return res.json(item);
  } catch (error) {
    console.error("Erro ao buscar item de pedido:", error);
    return res.status(500).json({ message: "Erro ao buscar item de pedido." });
  }
}

// Criar novo item de pedido
export async function createPedidoItem(req, res) {
  const { pedido_id, produto_id, quantidade, preco_unitario } = req.body;

  try {
    const item = await pedidoItemRepository.createPedidoItem({
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario,
    });

    return res.status(201).json(item);
  } catch (error) {
    console.error("Erro ao criar item de pedido:", error);
    return res.status(400).json({ message: "Erro ao criar item de pedido." });
  }
}

// Atualizar item de pedido
export async function updatePedidoItem(req, res) {
  const { id } = req.params;
  const { pedido_id, produto_id, quantidade, preco_unitario } = req.body;

  try {
    const item = await pedidoItemRepository.updatePedidoItem(id, {
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario,
    });

    if (!item) {
      return res
        .status(404)
        .json({ message: "Item de pedido não encontrado." });
    }

    return res.json(item);
  } catch (error) {
    console.error("Erro ao atualizar item de pedido:", error);
    return res
      .status(400)
      .json({ message: "Erro ao atualizar item de pedido." });
  }
}

// Deletar item de pedido
export async function deletePedidoItem(req, res) {
  const { id } = req.params;

  try {
    const item = await pedidoItemRepository.deletePedidoItem(id);

    if (!item) {
      return res
        .status(404)
        .json({ message: "Item de pedido não encontrado." });
    }

    return res.json({ message: "Item de pedido deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar item de pedido:", error);
    return res.status(500).json({ message: "Erro ao deletar item de pedido." });
  }
}
