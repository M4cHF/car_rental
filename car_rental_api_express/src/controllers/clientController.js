const Client = require('../models/Client');

const clientController = {
    // Lister tous les clients.
    getAll: (req, res) => {
        Client.getAll((err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching clients', error: err });
            }
            res.status(200).json(result);
        });
    },

    // Lister un seul client.
    getClientById: (req, res) => {
        const clientId = req.params.id;
        // Validate the client ID
        if (!clientId) {
            return res.status(400).json({ message: 'Client ID is required' });
        }
        Client.getClientById({ id: clientId }, (err, result) => {
            if (err) {
                console.error('Error fetching client:', err); // Log for debugging
                return res.status(500).json({ message: 'Error fetching client', error: err.message || err });
            }
            if (!result) {
                return res.status(404).json({ message: 'Client not found' });
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
