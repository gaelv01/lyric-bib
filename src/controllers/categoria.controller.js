import { Categoria } from "../models/Categoria.js";

export const createCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const newCategoria = await Categoria.create({ nombre });
    res.status(201).json(newCategoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCategoriaById = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      categoria.nombre = nombre;
      await categoria.save();
      res.json(categoria);
    } else {
      res.status(404).json({ message: "Categoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.destroy();
      res.json({ message: "Categoría eliminada" });
    } else {
      res.status(404).json({ message: "Categoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
