<template>
    <NavBarPage />
    <div class="full-background">
        <div class="container">
            <h1>Gestion de Stock</h1>
            <section class="dashboard-widgets">
                
                <div class="widget" v-for="(produit, index) in produits" :key="index">
                    <h2>{{ produit.nom }}</h2>
                    <p>{{ produit.quantiteTotale }}</p>
                    <div class="widget-icons">
                        <i class="fas fa-edit" style="cursor: pointer; color: blue; margin-right: 10px;" title="Modifier"></i>
                        <i class="fas fa-trash-alt" style="cursor: pointer; color: red;" title="Supprimer"></i>
                    </div>
                </div>
            </section>
            <!-- Bouton "Voir Plus" placé en haut à droite -->
            <button @click="voirPlus" class="voir-plus-btn top-right">Voir plus</button>
            
            <!-- Affichage en Popup de la liste des produits -->
            <div v-if="afficherProduits" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <h2>Liste des Produits</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom du produit</th>
                                <th>Quantité restante</th>
                                <th>Quantité ajoutée</th>
                                <th>Quantité totale</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(produit, index) in produits" :key="index">
                                <td>{{ produit.nom }}</td>
                                <td>{{ produit.quantiteRestante }}</td>
                                <td><input type="number" v-model.number="produit.quantiteAjoutee" min="0"></td>
                                <td>{{ produit.quantiteTotale }}</td>
                                <td><button @click="ajouterProduit(produit)">Ajouter</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="close-btn" @click="closeModal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarPage from './NavBarPage.vue';

export default {
    components: {
        NavBarPage
    },
    data() {
        return {
            afficherProduits: false,
            produits: [
                { nom: 'Tissus', quantiteRestante: 10, quantiteAjoutee: 0, quantiteTotale: 10 },
                { nom: 'Fils', quantiteRestante: 5, quantiteAjoutee: 0, quantiteTotale: 5 },
                { nom: 'Ciseaux', quantiteRestante: 8, quantiteAjoutee: 0, quantiteTotale: 8 },
                { nom: 'Boutons', quantiteRestante: 20, quantiteAjoutee: 0, quantiteTotale: 20 },
                { nom: 'Aiguilles', quantiteRestante: 15, quantiteAjoutee: 0, quantiteTotale: 15 },
                { nom: 'Fermetures', quantiteRestante: 12, quantiteAjoutee: 0, quantiteTotale: 12 },
                { nom: 'Mètres', quantiteRestante: 22, quantiteAjoutee: 0, quantiteTotale: 22 },
                { nom: 'Papiers de patron', quantiteRestante: 18, quantiteAjoutee: 0, quantiteTotale: 18 },
                { nom: 'Fer à repasser', quantiteRestante: 9, quantiteAjoutee: 0, quantiteTotale: 9 },
                { nom: 'Fourniture de décoration', quantiteRestante: 30, quantiteAjoutee: 0, quantiteTotale: 30 },
                { nom: 'Huile pour machine à coudre', quantiteRestante: 7, quantiteAjoutee: 0, quantiteTotale: 7 },
            ]
        };
    },
    methods: {
        voirPlus() {
            this.afficherProduits = true; // Ouvrir la modal
        },
        closeModal() {
            this.afficherProduits = false; // Fermer la modal
        },
        ajouterProduit(produit) {
            produit.quantiteTotale += parseInt(produit.quantiteAjoutee); // Met à jour la quantité totale
            produit.quantiteRestante += parseInt(produit.quantiteAjoutee); // Met à jour la quantité restante
            produit.quantiteAjoutee = 0; // Réinitialise la quantité ajoutée
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    font-family: Arial, sans-serif;
    background-color: rgba(0, 0, 0, 0.1);
}

.full-background {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh; /* Prend toute la hauteur de la page */
    padding: 20px; /* Ajoute un peu d'espace autour */
}

.container {
    width: 90%;
    margin: auto;
    margin-top: 40px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    /*margin-top: 10px;*/
}

/* Widgets du tableau de bord */
.dashboard-widgets {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.widget {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    width: 23%; /* Augmenté de 30% à 40% */
    height: 13rem; /* Ajuste la hauteur automatiquement */
    min-height: 150px; /* Ajout d'une hauteur minimale */
    margin-bottom: 60px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    position: relative; /* Permet de positionner les icônes par rapport au widget */
}

.widget h2 {
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 35px;
}

.widget p {
    font-size: 22px;
    font-weight: bold;
    color: #2c3e50;
}

.widget-icons {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex; /* Ajoute ce style pour aligner les icônes sur une ligne */
}

.widget-icons i {
    margin-left: 10px; /* Espace entre les icônes */
    font-size: 18px; /* Assure une bonne taille d'icône */
    cursor: pointer; /* Change le curseur au survol des icônes */
    color: #555; /* Couleur par défaut des icônes */
}

.widget-icons i:hover {
    color: #000; /* Change la couleur au survol */
}

/* Ajoute des styles pour le bouton "Voir plus" */
.voir-plus-btn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.voir-plus-btn:hover {
    background-color: #2980b9;
}

/* Styles pour la liste des produits */
.produits-list {
    margin-top: 20px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.produit-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.voir-plus-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.voir-plus-btn.top-right {
    position: absolute;
    right: 20px;
    top: 200px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f4f4f4;
}

.close-btn {
    margin-top: 20px;
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.close-btn:hover {
    background-color: #c0392b;
}
/*.right-aligned {
    margin-left: auto;  Aligne vers la droite 
}*/
</style>