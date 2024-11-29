import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Canto = sequelize.define(
  "cantos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "Clave primaria del canto, ID autoincrementado",
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nombre del canto",
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Anónimo",
      comment: "Autor del canto, por defecto es 'Anónimo'",
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Contenido del canto",
    },
    acordes: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Acordes del canto, separados por coma",
    },
    num_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "ID numérico del canto, para búsqueda rápida",
    },
    veces_abierto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Número de veces que se ha abierto el canto",
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "ID de la categoría del canto",
    },
  },
  { timestamps: false }
);
