import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Categoria = sequelize.define("categorias", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "Clave primaria de la categoria, ID autoincrementado",
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "El nombre de la categoría",
  },
});
