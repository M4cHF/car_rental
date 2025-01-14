const Client = require('../models/Client');

const clientController = {
    // // Lister tous les clients.
    getAll: (req, res) => {
        Client.getAll((err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching clients', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Ajouter un nouveau client.
    create: (req, res) => {
        const { nom, prenom, email, telephone } = req.body;
        const newClient = { nom, prenom, email, telephone };
        
        Client.create(newClient, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error adding client', error: err });
            }
            res.status(201).json({ message: 'Client added successfully', clientId: result.insertId });
        });
    },

    // Modifier un client existant.
    update: (req, res) => {
        const { id } = req.params;
        const { nom, prenom, email, telephone } = req.body;
        const updatedClient = { nom, prenom, email, telephone };
        
        Client.update(id, updatedClient, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating client', error: err });
            }
            res.status(200).json({ message: 'Client updated successfully' });
        });
    },

    // Supprime un client.
    delete: (req, res) => {
        const { id } = req.params;
        
        Client.delete(id, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting client', error: err });
            }
            res.status(200).json({ message: 'Client deleted successfully' });
        });
    }
};

module.exports = clientController;
