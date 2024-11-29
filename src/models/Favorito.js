import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Favorito = sequelize.define("favoritos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    comment: "Clave primaria del favorito, ID autoincrementado",
  },
  canto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "ID del canto favorito",
  },
  // usuario_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   comment: "ID del usuario que tiene el canto como favorito",
  // },
});
