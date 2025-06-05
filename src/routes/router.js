import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import pagamentoRoutes from "./pagamentoRoutes.js";

const router = Router();

router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/pagamentos", pagamentoRoutes);

export default router;
