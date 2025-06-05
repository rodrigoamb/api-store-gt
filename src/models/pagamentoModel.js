import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Pedido from "./pedidoModel.js";

const Pagamento = sequelize.define(
  "Pagamento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "pedidos",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    forma_pagamento: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status_pagamento: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "pagamentos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Pagamento.belongsTo(Pedido, { foreignKey: "pedido_id", as: "pedido" });

export default Pagamento;
