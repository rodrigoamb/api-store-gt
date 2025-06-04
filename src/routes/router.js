import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";

const router = Router();

router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);
router.use("/pedidos", pedidoRoutes);

export default router;
