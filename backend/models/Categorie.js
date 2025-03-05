const db = require('../config/database');

class categorie {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM categories', (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    }
    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
                if (err) reject(err);
                else resolve(results[0]);
            });
        });
    }

}

module.exports = categorie ;