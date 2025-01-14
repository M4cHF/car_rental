const Voiture = require('../models/Voiture');

const voitureController = {
    // Lister toutes les voitures :
    getAll: (req, res) => {
        Voiture.getAll((err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching cars', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Lister une voiture par id :
    getVoitureById: (req, res) => {
        const voitureId = req.params.id;
    
        // Validate the voiture ID
        if (!voitureId) {
            return res.status(400).json({ message: 'Voiture ID is required' });
        }
    
        // Call the model function
        Voiture.getVoitureById({ id: voitureId }, (err, result) => {
            if (err) {
                console.error('Error fetching voiture:', err); // Log detailed error
                return res.status(500).json({ message: 'Error fetching voiture', error: err.message || err });
            }
            if (!result) {
                return res.status(404).json({ message: 'Voiture not found' });
            }
            res.status(200).json(result);
        });
    },

    // Ajouter une nouvelle voiture :
    create: (req, res) => {
        const { marque, modele, annee, prix } = req.body;
        const newCar = { marque, modele, annee, prix };
        
        Voiture.create(newCar, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding car', error: err });
            }
            res.status(201).json({ message: 'Car added successfully', carId: result.insertId });
        });
    },

    // Modifie une voiture existante :
    update: (req, res) => {
        const { id } = req.params;
        const { marque, modele, annee, prix } = req.body;
        const updatedCar = { marque, modele, annee, prix };
        
        Voiture.update(id, updatedCar, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating car', error: err });
            }
            res.status(200).json({ message: 'Car updated successfully' });
        });
    },

    // Supprimer une voiture
    delete: (req, res) => {
        const { id } = req.params;
        
        Voiture.delete(id, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting car', error: err });
            }
            res.status(200).json({ message: 'Car deleted successfully' });
        });
    }
};

module.exports = voitureController;
