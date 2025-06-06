import { Router } from "express";
import * as pedidoItemController from "../controllers/pedidoItemController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Rotas protegidas por autenticação
router.get("/", authMiddleware, pedidoItemController.getAllPedidoItens);
router.get("/:id", authMiddleware, pedidoItemController.getPedidoItemById);
router.post("/", authMiddleware, pedidoItemController.createPedidoItem);
router.put("/:id", authMiddleware, pedidoItemController.updatePedidoItem);
router.delete("/:id", authMiddleware, pedidoItemController.deletePedidoItem);

export default router;
