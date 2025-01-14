const db = require('../config/db');

const Client = {
    // Liste tous les clients.
    getAll: (callback) => {
        const query = 'SELECT * FROM clients';
        db.query(query, callback);
    },

    // Lister un client par id.
    getClientById: (clientData, callback) => {
        const params = [clientData.id];
        const query = 'SELECT * FROM clients WHERE id = ?';
        db.query(query, params, (err, results) => {
            if (err) {
                console.error('Database error:', err); // Log for debugging
                return callback(new Error('Error fetching client'), null);
            }
            if (results.length === 0) {
                return callback(new Error('Client not found'), null);
            }
            callback(null, results[0]); // Return the single client record
        });
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
