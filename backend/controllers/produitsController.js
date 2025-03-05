const Produit = require("../models/Produits");

exports.getAllProduit = async (req, res) => {
  try {
    const produits = await Produit.getAll();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits", error });
  }
};

exports.getProduitsByCategory = async (req, res) => {
  try {
    const { categorie_id } = req.params;
    const produits = await Produit.getByCategory(categorie_id);

    if (produits.length === 0) {
      return res.status(404).json({ message: "Aucun produit trouvé pour cette catégorie" });
    }

    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des produits", error });
  }
};

exports.getProduitById = async (req, res) => {
  try {
    const { id } = req.params;
    const produit = await Produit.getById(id);

    if (!produit) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du produit", error });
  }
};

exports.createProduit = async (req, res) => {
  try {
    const { nom, description, prix, stock, categorie_id, image_principale } = req.body;

    if (!nom || !description || !prix || !stock || !categorie_id || !image_principale) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    await Produit.create(nom, description, prix, stock, categorie_id, image_principale);
    res.status(201).json({ message: "Produit ajouté avec succès" });
  } catch (error) {
     console.error("Erreur serveur :", error); 
     res.status(500).json({ message: "Erreur serveur", error: error.message }); 
  }
};

exports.updateProduit = async (req,res) => {
  try {
    const { id } = req.params;
    const { nom, description, prix, stock, categorie_id, image_principale } = req.body;

    if (!id ||!nom ||!description ||!prix ||!stock ||!categorie_id ||!image_principale) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    await Produit.update(id, nom, description, prix, stock, categorie_id, image_principale);
    res.status(200).json({ message: "Produit modifié avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la modification du produit", error });
  }
}; 
exports.deleteProduit = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID du produit requis" });
    }

    await Produit.delete(id);
    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du produit", error });
  }
}