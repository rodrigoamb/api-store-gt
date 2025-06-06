import Categoria from "../models/categoriaModel.js";

export async function findAllCategorias() {
  return await Categoria.findAll();
}

export async function findCategoriaById(id) {
  return await Categoria.findByPk(id);
}

export async function createCategoria({ nome }) {
  return await Categoria.create({ nome });
}

export async function updateCategoria(id, { nome }) {
  const categoria = await Categoria.findByPk(id);
  if (!categoria) return null;

  await categoria.update({ nome });
  return categoria;
}

export async function deleteCategoria(id) {
  const categoria = await Categoria.findByPk(id);
  if (!categoria) return null;

  await categoria.destroy();
  return categoria;
}
