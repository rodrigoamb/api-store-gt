import { Router } from "express";
import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";

const router = Router();

router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);

export default router;
