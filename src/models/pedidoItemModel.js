import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Pedido from "./pedidoModel.js";
import Produto from "./produtoModel.js";

const PedidoItem = sequelize.define(
  "PedidoItem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "pedidos",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "produtos",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    preco_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "pedido_itens",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Associações
PedidoItem.belongsTo(Pedido, { foreignKey: "pedido_id", as: "pedido" });
PedidoItem.belongsTo(Produto, { foreignKey: "produto_id", as: "produto" });

export default PedidoItem;
