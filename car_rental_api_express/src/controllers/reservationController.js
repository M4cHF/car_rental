const Reservation = require('../models/Reservation');

const reservationController = {
    // Lister toutes les réservations:
    getAll: (req, res) => {
        Reservation.getAll((err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching reservations', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Lister les réservations pour une voiture spécifique:
    getByVoitureId: (req, res) => {
        const { voitureId } = req.params;
        
        Reservation.getByVoitureId(voitureId, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching reservations for car', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Lister les réservations pour un client spécifique:
    getByClientId: (req, res) => {
        const { clientId } = req.params;
        
        Reservation.getByClientId(clientId, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching reservations for client', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Ajouter une nouvelle réservation
    create: (req, res) => {
        const { voiture_id, client_id, date_debut, date_fin } = req.body;
        const newReservation = { voiture_id, client_id, date_debut, date_fin };
        
        Reservation.create(newReservation, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding reservation', error: err });
            }
            res.status(201).json({ message: 'Reservation added successfully', reservationId: result.insertId });
        });
    },

    // Modifier une réservation existante
    update: (req, res) => {
        const { id } = req.params;
        const { voiture_id, client_id, date_debut, date_fin } = req.body;
        const updatedReservation = { voiture_id, client_id, date_debut, date_fin };
        
        Reservation.update(id, updatedReservation, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating reservation', error: err });
            }
            res.status(200).json({ message: 'Reservation updated successfully' });
        });
    },

    // Supprime une réservation:
    delete: (req, res) => {
        const { id } = req.params;
        
        Reservation.delete(id, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting reservation', error: err });
            }
            res.status(200).json({ message: 'Reservation deleted successfully' });
        });
    }
};

module.exports = reservationController;
