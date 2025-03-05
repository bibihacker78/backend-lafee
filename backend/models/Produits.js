const db = require("../config/database");

class Produit {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM produits", (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static getByCategory(categorie_id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM produits WHERE categorie_id = ?", [categorie_id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM produits WHERE id = ?", [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]); // Renvoie un seul produit
      });
    });
  }

  static create(nom, description, prix, stock, categorie_id, image_principale) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO produits (nom, description, prix, stock, categorie_id, image_principale) VALUES (?, ?, ?, ?, ?, ?)",
        [nom, description, prix, stock, categorie_id, image_principale],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }

  static update(id, nom, description, prix, stock, categorie_id, image_principale) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE produits SET nom =?, description =?, prix =?, stock =?, categorie_id =?, image_principale =? WHERE id =?",
        [nom, description, prix, stock, categorie_id, image_principale, id],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM produits WHERE id =?",
        [id],
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );
    });
  }
}

module.exports = Produit;
