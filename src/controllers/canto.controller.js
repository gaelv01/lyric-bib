import { Canto } from "../models/Canto.js";

export const createCanto = async (req, res) => {
  const { nombre, autor, contenido, acordes, num_id, categoria_id } = req.body;
  try {
    const newCanto = await Canto.create({
      nombre,
      autor,
      contenido,
      acordes,
      num_id,
      categoria_id,
    });
    res.status(201).json(newCanto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCantos = async (req, res) => {
  try {
    const cantos = await Canto.findAll();
    res.json(cantos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCantoById = async (req, res) => {
  const { id } = req.params;
  try {
    const canto = await Canto.findByPk(id);
    res.json(canto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCantoById = async (req, res) => {
  const { id } = req.params;
  const { nombre, autor, contenido, acordes, num_id, categoria_id } = req.body;
  try {
    const canto = await Canto.findByPk(id);
    if (canto) {
      canto.nombre = nombre;
      canto.autor = autor;
      canto.contenido = contenido;
      canto.acordes = acordes;
      canto.num_id = num_id;
      canto.categoria_id = categoria_id;
      await canto.save();
      res.json(canto);
    } else {
      res.status(404).json({ message: "Canto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCantoById = async (req, res) => {
  const { id } = req.params;
  try {
    const canto = await Canto.findByPk(id);
    if (canto) {
      await canto.destroy();
      res.json({ message: "Canto eliminado" });
    } else {
      res.status(404).json({ message: "Canto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
