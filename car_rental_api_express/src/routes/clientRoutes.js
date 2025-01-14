const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Routes pour Clients
router.get('/clients', clientController.getAll);
router.post('/clients', clientController.create);
router.put('/clients/:id', clientController.update);
router.delete('/clients/:id', clientController.delete);

module.exports = router;
