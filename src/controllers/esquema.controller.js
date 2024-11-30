import e from "cors";
import { Esquema } from "../models/Esquema.js";

export const createEsquema = async (req, res) => {
  try {
    const { nombre, descripcion, canto_id } = req.body;
    const newEsquema = await Esquema.create(
      { nombre, descripcion, canto_id },
      { fields: ["nombre", "descripcion", "canto_id"] }
    );
    res.status(201).json(newEsquema);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear un nuevo esquema",
      error: error.message,
    });
  }
};

export const getEsquemas = async (req, res) => {
  try {
    const esquemas = await Esquema.findAll();
    res.status(200).json(esquemas);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los esquemas",
      error: error.message,
    });
  }
};

export const getEsquemaById = async (req, res) => {
  try {
    const { id } = req.params;
    const esquema = await Esquema.findOne({ where: { id } });
    res.status(200).json(esquema);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el esquema",
      error: error.message,
    });
  }
};

export const updateEsquemaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, canto_id } = req.body;
    const esquema = await Esquema.findOne({ where: { id } });
    if (esquema) {
      esquema.nombre = nombre;
      esquema.descripcion = descripcion;
      esquema.canto_id = canto_id;
      await esquema.save();
      res.status(200).json(esquema);
    } else {
      res.status(404).json({ message: "Esquema no encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el esquema",
      error: error.message,
    });
  }
};

export const deleteEsquemaById = async (req, res) => {
  try {
    const { id } = req.params;
    const esquema = await Esquema.findOne({ where: { id } });
    if (esquema) {
      await esquema.destroy();
      res.status(200).json({ message: "Esquema eliminado" });
    } else {
      res.status(404).json({ message: "Esquema no encontrado" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el esquema",
      error: error.message,
    });
  }
};
