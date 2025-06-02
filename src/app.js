import express from "express";
import router from "./routes/router.js";
import sequelize from "./config/db.js";

const app = express();

//diz para a api que vamos manipular json
app.use(express.json());

//Rotas
app.use("/api", router);

//Sincronizar as tabelas do banco
sequelize
  .sync()
  .then(() => console.log("Banco de dados sincronizado"))
  .catch((error) =>
    console.error("Erro ao sincronizar o banco de dados:", error)
  );

export default app;
