import { Router } from "express";

const router = Router();

//Rotas para clientes

//trazer todos os clientes
router.get("/", getAllClientes);
//traz o cliente pelo id
router.get("/:id", getClientById);
//cria um novo cliente
router.post("/", createCliente);
//atualiza dados do cliente
router.put("/:id", updateCliente);
//deleta o cliente
router.delete("/:id", deleteCliente);

export default router;
