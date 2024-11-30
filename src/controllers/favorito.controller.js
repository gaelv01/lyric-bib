import { Favorito } from "../models/Favorito.js";

export const createFavorito = async (req, res) => {
  const { canto_id, usuario_id } = req.body;
  try {
    const newFavorito = await Favorito.create({ canto_id, usuario_id });
    res.status(201).json(newFavorito);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFavoritos = async (req, res) => {
  try {
    const favoritos = await Favorito.findAll();
    res.json(favoritos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFavoritoById = async (req, res) => {
  const { id } = req.params;
  try {
    const favorito = await Favorito.findByPk(id);
    res.json(favorito);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFavoritoById = async (req, res) => {
  const { id } = req.params;
  const { canto_id, usuario_id } = req.body;
  try {
    const favorito = await Favorito.findByPk(id);
    if (favorito) {
      favorito.canto_id = canto_id;
      favorito.usuario_id = usuario_id;
      await favorito.save();
      res.json(favorito);
    } else {
      res.status(404).json({ message: "Favorito no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFavoritoById = async (req, res) => {
  const { id } = req.params;
  try {
    const favorito = await Favorito.findByPk(id);
    if (favorito) {
      await favorito.destroy();
      res.json({ message: "Favorito eliminado" });
    } else {
      res.status(404).json({ message: "Favorito no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
