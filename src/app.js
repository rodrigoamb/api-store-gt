import express from "express";

const app = express();

//diz para a api que vamos manipular json
app.use(express.json());

//Rotas

//Sincronizar as tabelas do banco

export default app;
