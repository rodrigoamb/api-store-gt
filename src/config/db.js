import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecido com sucesso.");
} catch (error) {
  console.error("Erro ao conectar com o banco", error);
}

export default sequelize;
