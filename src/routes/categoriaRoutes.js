import { Router } from "express";
import * as categoriaController from "../controllers/categoriaController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, categoriaController.getAllCategorias);
router.get("/:id", authMiddleware, categoriaController.getCategoriaById);
router.post("/", authMiddleware, categoriaController.createCategoria);
router.put("/:id", authMiddleware, categoriaController.updateCategoria);
router.delete("/:id", authMiddleware, categoriaController.deleteCategoria);

export default router;
