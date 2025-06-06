import { Router } from "express";

import clienteRoutes from "./clienteRoutes.js";
import enderecoRoutes from "./enderecoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import pagamentoRoutes from "./pagamentoRoutes.js";
import pedidoItemRoutes from "./pedidoItemRoutes.js";

const router = Router();

router.use("/clientes", clienteRoutes);
router.use("/enderecos", enderecoRoutes);
router.use("/categorias", categoriaRoutes);
router.use("/produtos", produtoRoutes);
router.use("/pedidos", pedidoRoutes);
router.use("/pagamentos", pagamentoRoutes);
router.use("/pedido-itens", pedidoItemRoutes);

export default router;
