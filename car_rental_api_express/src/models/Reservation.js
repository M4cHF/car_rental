const db = require('../config/db');

const Reservation = {
    // Liste toutes les réservations.
    getAll: (callback) => {
        const query = `
            SELECT r.id, v.marque, v.modele, c.nom, c.prenom, r.date_debut, r.date_fin
            FROM reservations r
            JOIN voitures v ON r.voitures_id = v.id
            JOIN clients c ON r.clients_id = c.id
        `;
        db.query(query, callback);
    },

    // Liste les réservations pour une voiture spécifique.
    getByVoitureId: (voitureId, callback) => {
        const query = `
            SELECT r.id, c.nom, c.prenom, r.date_debut, r.date_fin
            FROM reservations r
            JOIN clients c ON r.clients_id = c.id
            WHERE r.voitures_id = ?
        `;
        db.query(query, [voitureId], callback);
    },

    // Liste les réservations pour un client spécifique.
    getByClientId: (clientId, callback) => {
        const query = `
            SELECT r.id, v.marque, v.modele, r.date_debut, r.date_fin
            FROM reservations r
            JOIN voitures v ON r.voitures_id = v.id
            WHERE r.clients_id = ?
        `;
        db.query(query, [clientId], callback);
    },

    // Ajoute une nouvelle réservation.
    create: (reservationData, callback) => {
        const query = 'INSERT INTO reservations (voitures_id, clients_id, date_debut, date_fin) VALUES (?, ?, ?, ?)';
        const params = [reservationData.voiture_id, reservationData.client_id, reservationData.date_debut, reservationData.date_fin];
        db.query(query, params, callback);
    },

    // Modifie une réservation existante.
    update: (id, reservationData, callback) => {
        const query = 'UPDATE reservations SET voitures_id = ?, clients_id = ?, date_debut = ?, date_fin = ? WHERE id = ?';
        const params = [reservationData.voiture_id, reservationData.client_id, reservationData.date_debut, reservationData.date_fin, id];
        db.query(query, params, callback);
    },

    // Supprime une réservation.
    delete: (id, callback) => {
        const query = 'DELETE FROM reservations WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Reservation;
