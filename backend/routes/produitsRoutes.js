const express = require('express');
const router = express.Router();
const produitsController = require('../controllers/produitsController');

router.get('/', produitsController.getAllProduit);
router.get('/categorie/:categorie_id', produitsController.getProduitsByCategory);
router.get('/:id', produitsController.getProduitById)
router.post("/", produitsController.createProduit);
router.put("/:id", produitsController.updateProduit);
router.delete("/:id", produitsController.deleteProduit);

module.exports = router;