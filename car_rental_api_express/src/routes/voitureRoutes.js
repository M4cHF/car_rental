const express = require('express');
const router = express.Router();
const voitureController = require('../controllers/voitureController');

// Routes pour Voitures
router.get('/voitures', voitureController.getAll);
router.get('/voitures/:id', voitureController.getVoitureById);
router.post('/voitures', voitureController.create);
router.put('/voitures/:id', voitureController.update);
router.delete('/voitures/:id', voitureController.delete);

module.exports = router;
