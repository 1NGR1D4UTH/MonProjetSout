<template>
<div class="full-background">
<div class="dashboard-container">
        <!-- Barre latérale -->
        <nav class="sidebar">
            <div class="logo">
                <img src="logo.png" alt="Logo" />
                <span>Needle Tek</span>
            </div>
            <ul>
                <li><router-link to="#" style="text-decoration: none;"><font-awersome-icon :icon="['fas', 'user']"/> Home</router-link></li>
                <li class="dropdown"><router-link to="" style="text-decoration: none;"><i class="fa fa-file"></i> Commande</router-link>
                    <div class="dropdown-content">  
                        <button class="new-command" @click="showPasserCommande = true">Passer une commande</button>
                        <button class="new-command" @click="showSuivreCommande = true">Suivre sa commande</button>
                        <router-link to="/" style="text-decoration: none;">Annuler</router-link>
                    </div>
                    
                    <PasserCommande v-if="showPasserCommande" :showModal="showPasserCommande" @close="showPasserCommande=false"/>
                    <SuivreCommande v-if="showSuivreCommande" :showModal="showSuivreCommande" @close="showSuivreCommande=false"/>
                </li>
                <li><router-link to="#" style="text-decoration: none;"><i class="fas fa-tshirt"></i> Catalogue</router-link></li>    
            </ul>
        </nav>

        <!-- Contenu principal -->
        <div class="main-content">
            <header>
                <h1>Home</h1>
                <div class="profile-summary">
                    <img src="profile.jpg" alt="Profil" class="profile-pic">
                    <span>[Nom du client]</span>
                </div>
            </header>

            <!-- Section du tableau de bord -->
            <section class="dashboard-widgets">
                <div class="widget welcome">
                    <h2>Bienvenue!</h2>
                    <p>[Nom du client]</p>
                </div>
                <div class="widget">
                    <h2>Nombre de commande</h2>
                    <p>0</p>
                </div>
                <div class="widget">
                    <h2>Commande en cours</h2>
                    <p>0</p>
                    <span>En couture</span>
                </div>
                <div class="widget">
                    <h2>Commande en retard</h2>
                    <p>0</p>
                    <span>A traiter</span>
                </div>
                <div class="widget">
                    <h2>Commande terminées</h2>
                    <p>0</p>
                    <span>Non livrées</span>
                </div>
            </section>

            
        </div>
    </div>

</div>
</template>


<script>

import PasserCommande from './PasserCommande.vue';
import SuivreCommande from './SuivreCommande.vue';

export default {

    components: {
        PasserCommande,
        SuivreCommande,
    },
    data() {
        return {
            showPasserCommande: false,
            showSuivreCommande: false,
        };
    },
    mounted() {
    },
    methods: {
        
    }
};

</script>


<style scoped>

/* Styles de base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

.full-background {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh; /* Prend toute la hauteur de la page */
    padding: 20px; /* Ajoute un peu d'espace autour */
}

.new-command {
    color: white;
    text-decoration: none;
    font-size: 16px;
    display: block;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border:none;    
    text-align: center;
    transition: background-color 0.3s ease;
}

body {
    background-color: #f8f9fa;
}

.dashboard-container {
    display: flex;
}

/* Barre latérale */
.sidebar {
    width: 250px;
    background-color: rgb(2, 34, 72);
    color: white;
    height: 100vh;
    padding: 20px;
    position: fixed;
}

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

.logo img {
    width: 50px;
   /* margin-right: 10px;*/
}

.logo span {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin-bottom: 15px;
}

.sidebar ul li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    display: block;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: center;
    transition: background-color 0.3s ease;
}

.sidebar ul li a:hover {
    background-color: #F63166;
}

/* Section des paramètres */
.parametres {
    margin-top: 30px;
}

/* Contenu principal */
.main-content {
    margin-left: 250px;
    padding: 20px;
    width: calc(100% - 250px);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 24px;
}

.profile-summary {
    display: flex;
    align-items: center;
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}

.profile-summary span {
    font-size: 18px;
    font-weight: bold;
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
    padding: 30px;
    width: 30%;
    height: 200px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.widget h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.widget p {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
}

.widget span {
    display: block;
    margin-top: 10px;
    color: #7f8c8d;
}

.revenu-section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.revenu-section h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.revenu-section p {
    font-size: 16px;
    margin-bottom: 10px;
}

.revenu-section button {
    background-color: #1abc9c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.revenu-section button:hover {
    background-color: #16a085;
}

/*.dropdown {
position: relative;
display: inline-block;
}*/

.dropdown-content {
display: none;
position: absolute;
background-color: rgba(0, 0, 0, 5);
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
}

.dropdown-content a {
color: rgb(2, 34, 72);
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
}
.dropdown-content a:hover   {
background-color: #f1f1f1;
}

.dropdown-content button:hover {
    background-color: #F63166;
}
.dropdown:hover .dropdown-content {
display: block;
}
</style>