import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Esquema = sequelize.define(
  "esquemas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      comment: "Clave primaria del esquema, ID autoincrementado",
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Nombre del esquema",
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Descripción del esquema",
      defaultValue: "Esquema sin descripción",
    },
    canto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ID del canto al que pertenece el esquema",
    },
  },
  { timestamps: true }
);
