const express = require('express');
const router = express.Router();

const produitsRoutes = require('./produitsRoutes');
const categorieRoutes = require('./categorieRoutes');

router.use('/api/produits', produitsRoutes);
router.use('/api/categorie', categorieRoutes);

module.exports = router;