# car_rental ( Mini-Projet ) 

## Gestion de Réservations de Voitures

Le projet consiste à développer une application complète de gestion de réservations de voitures. Elle est divisée en deux parties principales :

### 1. Back-end avec Node.js et MySQL (MVC)
- Création d’une API RESTful pour gérer les voitures, les clients, et les réservations.

---

## Partie 1 : Back-End avec Node.js et MySQL (MVC)

### Objectifs :
1. Développer un backend suivant l'architecture MVC pour les entités suivantes :
   - **Voitures**
   - **Clients**
   - **Réservations**

2. Fournir des API RESTful pour permettre les opérations suivantes :
   - Ajouter, modifier, supprimer, et lister des voitures.
   - Ajouter, modifier, supprimer, et lister des clients.
   - Ajouter, modifier, supprimer, et lister des réservations.
   - Afficher les réservations par voiture.
   - Afficher les réservations par client.

### Structure des Entités :

#### 1. Voiture :
- **Champs** :
  - `id` (INT, auto-increment)
  - `marque` (VARCHAR, non nul)
  - `modele` (VARCHAR, non nul)
  - `annee` (YEAR, non nul)
  - `prix` (DECIMAL, non nul)

#### 2. Client :
- **Champs** :
  - `id` (INT, auto-increment)
  - `nom` (VARCHAR, non nul)
  - `prenom` (VARCHAR, non nul)
  - `email` (VARCHAR, unique, non nul)
  - `telephone` (VARCHAR, facultatif)

#### 3. Réservation :
- **Champs** :
  - `id` (INT, auto-increment)
  - `voiture_id` (INT, clé étrangère vers voitures)
  - `client_id` (INT, clé étrangère vers clients)
  - `date_debut` (DATE, non nul)
  - `date_fin` (DATE, non nul)

---

### Routes API :

#### 1. Voitures :
- `GET /voitures` : Liste toutes les voitures.
- `POST /voitures` : Ajoute une nouvelle voiture.
- `PUT /voitures/:id` : Modifie une voiture existante.
- `DELETE /voitures/:id` : Supprime une voiture.

#### 2. Clients :
- `GET /clients` : Liste tous les clients.
- `POST /clients` : Ajoute un nouveau client.
- `PUT /clients/:id` : Modifie un client existant.
- `DELETE /clients/:id` : Supprime un client.

#### 3. Réservations :
- `GET /reservations` : Liste toutes les réservations.
- `GET /reservations/voiture/:voitureId` : Liste les réservations pour une voiture spécifique.
- `GET /reservations/client/:clientId` : Liste les réservations pour un client spécifique.
- `POST /reservations` : Ajoute une nouvelle réservation.
- `PUT /reservations/:id` : Modifie une réservation existante.
- `DELETE /reservations/:id` : Supprime une réservation.

---

### Exigences Techniques :
- Utilisation de MySQL pour la base de données.
- Documentation des API via Postman ou Swagger (bonus).

---

## MySQL :

### Création de la base de données
```sql
CREATE DATABASE IF NOT EXISTS gestion_voitures;
USE gestion_voitures;
```

### Création des Tables

#### Table des voitures
```sql
CREATE TABLE voitures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marque VARCHAR(50) NOT NULL,
    modele VARCHAR(50) NOT NULL,
    annee YEAR NOT NULL,
    prix DECIMAL(10, 2) NOT NULL
);
```

#### Table des clients
```sql
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telephone VARCHAR(20)
);
```

#### Table des réservations
```sql
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    voiture_id INT NOT NULL,
    client_id INT NOT NULL,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    FOREIGN KEY (voiture_id) REFERENCES voitures(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);
```

### Insertion d'exemples de données

#### Données dans la table `voitures`
```sql
INSERT INTO voitures (marque, modele, annee, prix) VALUES
('Toyota', 'Corolla', 2020, 20000.00),
('Ford', 'Focus', 2019, 18000.00),
('Honda', 'Civic', 2021, 22000.00);
```

#### Données dans la table `clients`
```sql
INSERT INTO clients (nom, prenom, email, telephone) VALUES
('Doe', 'John', 'john.doe@example.com', '1234567890'),
('Smith', 'Jane', 'jane.smith@example.com', '0987654321'),
('Johnson', 'Alice', 'alice.johnson@example.com', '1122334455');
```

#### Données dans la table `réservations`
```sql
INSERT INTO reservations (voiture_id, client_id, date_debut, date_fin) VALUES
(1, 1, '2024-12-10', '2024-12-15'),
(2, 2, '2024-12-12', '2024-12-20'),
(3, 3, '2024-12-18', '2024-12-25');
