import { Router } from "express";
import * as clienteController from "../controllers/clienteController.js";

const router = Router();

//Rotas para clientes

//trazer todos os clientes
router.get("/", clienteController.getAllClientes);
//traz o cliente pelo id
router.get("/:id", clienteController.getClienteById);
//cria um novo cliente
router.post("/", clienteController.createCliente);
//atualiza dados do cliente
router.put("/:id", clienteController.updateCliente);
//deleta o cliente
router.delete("/:id", clienteController.deleteCliente);

export default router;
