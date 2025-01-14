const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Routes pour Reservations
router.get('/reservations', reservationController.getAll);
router.get('/reservations/voiture/:voitureId', reservationController.getByVoitureId);
router.get('/reservations/client/:clientId', reservationController.getByClientId);
router.post('/reservations', reservationController.create);
router.put('/reservations/:id', reservationController.update);
router.delete('/reservations/:id', reservationController.delete);

module.exports = router;
