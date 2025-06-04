import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Cliente from "./clienteModel.js";

const Pedido = sequelize.define(
  "Pedido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clientes",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    data_pedido: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM(
        "pendente",
        "aprovado",
        "em andamento",
        "entregue",
        "cancelado"
      ),
      allowNull: false,
      defaultValue: "pendente",
    },
  },
  {
    tableName: "pedidos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

//associação com Cliente
Pedido.belongsTo(Cliente, { foreignKey: "cliente_id", as: "cliente" });

export default Pedido;
