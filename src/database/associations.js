import { Canto } from "../models/Canto.js";
import { Categoria } from "../models/Categoria.js";
import { Esquema } from "../models/Esquema.js";
import { Favorito } from "../models/Favorito.js";

export function applyAssociations() {
  try {
    // Canto - Categoria
    Canto.belongsTo(Categoria, { foreignKey: "categoria_id" });
    Categoria.hasMany(Canto, { foreignKey: "categoria_id" });

    // Canto - Esquema
    Canto.hasMany(Esquema, { foreignKey: "canto_id" });
    Esquema.belongsTo(Canto, { foreignKey: "canto_id" });

    // Canto - Favorito
    Canto.hasMany(Favorito, { foreignKey: "canto_id" });
    Favorito.belongsTo(Canto, { foreignKey: "canto_id" });

    console.log("Associations applied successfully.");
  } catch (error) {
    console.error("Error applying associations:", error);
  }
}
