const db = require('../config/db');

const Client = {
    // Liste tous les clients.
    getAll: (callback) => {
        const query = 'SELECT * FROM clients';
        db.query(query, callback);
    },

    // Ajoute un nouveau client.
    create: (clientData, callback) => {
        const query = 'INSERT INTO clients (nom, prenom, email, telephone) VALUES (?, ?, ?, ?)';
        const params = [clientData.nom, clientData.prenom, clientData.email, clientData.telephone || null];
        db.query(query, params, callback);
    },

    // Modifie un client existant.
    update: (id, clientData, callback) => {
        const query = 'UPDATE clients SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?';
        const params = [clientData.nom, clientData.prenom, clientData.email, clientData.telephone || null, id];
        db.query(query, params, callback);
    },

    // Supprime un client.
    delete: (id, callback) => {
        const query = 'DELETE FROM clients WHERE id = ?';
        db.query(query, [id], callback);
    }
};

module.exports = Client;
