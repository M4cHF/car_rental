const db = require('../config/db');

const Voiture = {
    // Liste toutes les voitures.
    getAll: (callback) => {
        const query = 'SELECT * FROM voitures';
        db.query(query, callback);
    },

    // Lister une voiture par id :
    getVoitureById: (voitureData, callback) => {
        const params = [voitureData.id];
        const query = 'SELECT * FROM voitures WHERE id = ?';
    
        // Execute the query
        db.query(query, params, (err, results) => {
            if (err) {
                console.error('Database error:', err); // Log detailed error
                return callback({ message: 'Error fetching voiture', error: err }, null);
            }
            if (results.length === 0) {
                return callback({ message: 'Voiture not found', error: null }, null);
            }
            callback(null, results[0]); // Return the single voiture record
        });
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
