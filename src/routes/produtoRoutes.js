import { Router } from "express";
import * as produtoController from "../controllers/produtoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, produtoController.getAllProdutos);
router.get("/:id", authMiddleware, produtoController.getProdutoById);
router.post("/", authMiddleware, produtoController.createProduto);
router.put("/:id", authMiddleware, produtoController.updateProduto);
router.delete("/:id", authMiddleware, produtoController.deleteProduto);

export default router;
