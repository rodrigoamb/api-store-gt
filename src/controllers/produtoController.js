import * as produtoRepository from "../repositories/produtoRepository.js";

// Buscar todos os produtos
export async function getAllProdutos(req, res) {
  try {
    const produtos = await produtoRepository.findAllProdutos();
    return res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return res.status(500).json({ message: "Erro ao buscar produtos." });
  }
}

// Buscar produto por ID
export async function getProdutoById(req, res) {
  const { id } = req.params;

  try {
    const produto = await produtoRepository.findProdutoById(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.json(produto);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return res.status(500).json({ message: "Erro ao buscar produto." });
  }
}

// Criar novo produto
export async function createProduto(req, res) {
  const { nome, preco, estoque, categoria_id } = req.body;

  try {
    const produto = await produtoRepository.createProduto({
      nome,
      preco,
      estoque,
      categoria_id,
    });
    return res.status(201).json(produto);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(400).json({ message: "Erro ao criar produto." });
  }
}

// Atualizar produto
export async function updateProduto(req, res) {
  const { id } = req.params;
  const { nome, preco, estoque, categoria_id } = req.body;

  try {
    const produto = await produtoRepository.updateProduto(id, {
      nome,
      preco,
      estoque,
      categoria_id,
    });

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.json(produto);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    return res.status(400).json({ message: "Erro ao atualizar produto." });
  }
}

// Deletar produto
export async function deleteProduto(req, res) {
  const { id } = req.params;

  try {
    const produto = await produtoRepository.deleteProduto(id);

    if (!produto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }

    return res.json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    return res.status(500).json({ message: "Erro ao deletar produto." });
  }
}
