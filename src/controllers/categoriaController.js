import * as categoriaRepository from "../repositories/categoriaRepository.js";

// Buscar todas as categorias
export async function getAllCategorias(req, res) {
  try {
    const categorias = await categoriaRepository.findAllCategorias();
    return res.json(categorias);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return res.status(500).json({ message: "Erro ao buscar categorias." });
  }
}

// Buscar categoria por ID
export async function getCategoriaById(req, res) {
  const { id } = req.params;

  try {
    const categoria = await categoriaRepository.findCategoriaById(id);

    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    return res.json(categoria);
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);
    return res.status(500).json({ message: "Erro ao buscar categoria." });
  }
}

// Criar nova categoria
export async function createCategoria(req, res) {
  const { nome } = req.body;

  try {
    const categoria = await categoriaRepository.createCategoria({ nome });
    return res.status(201).json(categoria);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    return res.status(400).json({ message: "Erro ao criar categoria." });
  }
}

// Atualizar categoria
export async function updateCategoria(req, res) {
  const { id } = req.params;
  const { nome } = req.body;

  try {
    const categoria = await categoriaRepository.updateCategoria(id, { nome });

    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    return res.json(categoria);
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    return res.status(400).json({ message: "Erro ao atualizar categoria." });
  }
}

// Deletar categoria
export async function deleteCategoria(req, res) {
  const { id } = req.params;

  try {
    const categoria = await categoriaRepository.deleteCategoria(id);

    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    return res.json({ message: "Categoria deletada com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar categoria:", error);
    return res.status(500).json({ message: "Erro ao deletar categoria." });
  }
}
