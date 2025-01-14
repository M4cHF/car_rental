const db = require('../config/db');

const Voiture = {
    // Liste toutes les voitures.
    getAll: (callback) => {
        const query = 'SELECT * FROM voitures';
        db.query(query, callback);
    },

    // Ajoute une nouvelle voiture.
    create: (voitureData, callback) => {
        const query = 'INSERT INTO voitures (marque, modele, annee, prix) VALUES (?, ?, ?, ?)';
        const params = [voitureData.marque, voitureData.modele, voitureData.annee, voitureData.prix];
        db.query(query, params, callback);
    },

    // Modifie une voiture existante.
    update: (id, voitureData, callback) => {
        const query = 'UPDATE voitures SET marque = ?, modele = ?, annee = ?, prix = ? WHERE id = ?';
        const params = [voitureData.marque, voitureData.modele, voitureData.annee, voitureData.prix, id];
        db.query(query, params, callback);
    },

    // Supprime une voiture.
    delete: (id, callback) => {
        const query = 'DELETE FROM voitures WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Voiture;
