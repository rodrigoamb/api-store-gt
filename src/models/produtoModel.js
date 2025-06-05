import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Categoria from "./categoriaModel.js"; // Para definir a relação

const Produto = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "categorias",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "produtos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Associação com Categoria
Produto.belongsTo(Categoria, { foreignKey: "categoria_id", as: "categoria" });

export default Produto;
