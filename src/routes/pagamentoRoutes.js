import { Router } from "express";
import * as pagamentoController from "../controllers/pagamentoController.js";

const router = Router();

router.get("/", pagamentoController.getAllPagamentos);
router.get("/:id", pagamentoController.getPagamentoById);
router.post("/", pagamentoController.createPagamento);
router.put("/:id", pagamentoController.updatePagamento);
router.delete("/:id", pagamentoController.deletePagamento);

export default router;
