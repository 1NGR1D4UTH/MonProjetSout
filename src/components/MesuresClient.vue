<template>
     <NavBarPage/>
    <div class="container">
        <header>
            <h1>Ajout Client</h1>
            <nav>
                <router-link to="#">Clients</router-link> / <span>Ajout client</span>
            </nav>
        </header>

        <!-- Stepper pour montrer les étapes -->
        <div class="stepper">
            <div class="step" :class="{ active: step === 1 }">
                <div class="icon" :class="{ completed: step > 1, current: step === 1 }"><i class="fas fa-user"></i></div>
                <span>INFORMATIONS CLIENT</span>
                <div class="line"></div>
            </div>
            <div class="step" :class="{ active: step === 2 }">
                <div class="icon" :class="{ completed: step > 2, current: step === 2 }"><i class="fas fa-ruler"></i></div>
                <span>MESURES CLIENT</span>
                <div class="line"></div>
            </div>
            <div class="step" :class="{ active: step === 3 }">
                <div class="icon" :class="{ completed: step === 3, current: step === 3 }"><i class="fas fa-check-circle"></i></div>
                <span>CONFIRMATION</span>
            </div>
        </div>

        <!-- Formulaire pour chaque étape -->
        <form @submit.prevent="handleSubmit">
            <div v-if="currentStep === 1">
                <div class="form-section">
                    <!-- Informations Client -->
                    <div class="form-group">
                        <label for="name">Nom et prénom</label>
                        <div class="name-box">
                            <input class="input" type="text" id="addClientusername" v-model="nom" required>
                            <input class="input" type="text" id="addClientsurname" v-model="prenom" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="name">Date et Lieu de naissance</label>
                        <div class="name-box">
                            <input class="input" type="date" id="addClientbirthday" v-model="date_naissance" required>
                            <input class="input" type="text" id="addClientlieuNaissance" v-model="lieu_naissance" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="Sexe">Sexe</label>
                        <select id="sexe" v-model="sexe" required>
                            <option value="Feminin">Feminin</option>
                            <option value="Masculin">Masculin</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="photoProfil">Photo de profil</label>
                        <input type="file" id="signupprofile" @change="handleImageUpload" />
                    </div>

                    <div class="form-group">
                        <label for="telephone">Email et Numéro de téléphone</label>
                        <div class="name-box">
                            <input class="input" type="email" v-model="email" placeholder="Email" required>
                            <input class="input" type="text" v-model="telephone" placeholder="Tel" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="name">Localisation</label>
                        <input class="input" type="text" v-model="localisation" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input class="input" type="password" v-model="mot_de_passe" required>
                    </div>
                </div>

                <div class="form-action">
                    <button type="button" @click="nextStep" class="btn-suivant">Suivant</button>
                </div>
            </div>

            <div v-if="currentStep === 2">
    <div class="form-section center-content">
        <!-- Fiche de mesures au-dessus des champs -->
        <div class="form-group full-width">
        <label for="ficheMesures">Fiche de mesures</label>
        <select id="ficheMesures" class="input" @change="redirectToPage($event.target)">
            <option value="">Sélectionner une fiche de mesure</option>
            <option value="/MesuresEnfant">Mesures enfants</option>
            <option value="MesuresFemme">Mesures femmes</option>
            <option value="MesuresHomme">Mesures hommes</option>
        </select>
    </div>

        <!-- Table des mesures et valeurs -->
        <!--<table class="table-mesures">
            <thead>
                <tr>
                    <th>Mesure</th>
                    <th>Valeur</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="mesuresBody">
                <tr>
                    <td><input type="text" class="input" placeholder="Mesure"></td>
                    <td><input type="text" class="input" placeholder="Valeur"></td>
                    <td><button type="button" class="btn-retirer" onclick="removeRow(this)">Retirer</button></td>
                </tr>
            </tbody>
        </table>

        <button type="button" class="btn-ajouter" onclick="addMesure()">Ajouter une mesure</button> -->
    </div>

    <div class="form-action">
        <button type="button" @click="prevStep" class="btn-prev">Précédent</button>
        <button type="button" @click="nextStep" class="btn-suivant">Suivant</button>
    </div>
</div>

    <div v-if="currentStep === 3" class="step-3">
                <!-- Section du profil utilisateur -->
        <div class="profile-section center-content">
            <!-- Photo de profil et nom -->
            <div class="profile-section">
                <img :src="clientData.photo" alt="Photo du client" class="profile-pic" v-if="clientData.photo" />
                <h2>{{ clientData.nom }}</h2>
            </div>

        <!-- Informations personnelles -->
        <div class="personal-info">
            <p><strong>Sexe :</strong> {{ clientData.sexe }}</p>
            <p><strong>Téléphone :</strong> {{ clientData.telephone }}</p>
            <p><strong>E-mail :</strong> {{ clientData.email }}</p>
            <p><strong>Localisation :</strong> {{ clientData.localisation }}</p>
        </div>
        <div class="measurements-section">
            <h3>Mesures</h3>
        <div class="client-measures">
        <div v-for="mesure in filteredMesures" :key="mesure.key">
            <p><strong>{{ getMesureLabel(mesure.key) }} :</strong> {{ clientData.mesures[mesure.key] }}</p>
        </div>
        </div>
    </div>
</div>

                <div class="form-action">
                    <button type="button" @click="prevStep" class="btn-prev">Précédent</button>
                    <button type="submit" class="btn-suivant">Confirmer</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import NavBarPage from './NavBarPage.vue';
import axios from 'axios';

export default {
    components: {
        NavBarPage
    },
    data() {
        return {
            currentStep: 1, // Étape initiale
            nom: '',
            prenom: '',
            date_naissance: null,
            lieu_naissance: '',
            sexe: '',
            telephone: '',
            email: '',
            localisation: '',
            mot_de_passe: '',
            //currentStep: 3,  Simulation d'être au Step 3
            clientData: {
                nom: '',
                sexe: '',
                telephone: '',
                email: '',
                localisation: '',
                photo: '', // Image uploadée
                mesures: {
                    
                }
            },
            mesuresDisponibles: [
                { label: 'Carrure', key: 'carrure' },
                { label: 'Poitrine', key: 'poitrine' },
                { label: 'Taille', key: 'taille' },
                { label: 'Cuisse', key: 'cuisse' },
                { label: 'Hanche', key: 'hanche' },
                { label: 'Ceinture', key: 'ceinture' },
                { label: 'Haut', key: 'haut' }
            ]
        };
    },
    computed: {
        filteredMesures() {
            return this.mesuresDisponibles.filter(mesure => this.clientData.mesures[mesure.key]);
        }
    },
    methods: {

        redirectToPage(selectElement) {
    const selectedValue = selectElement.value;

    if (selectedValue) {
        window.location.href = selectedValue;
    }
},
        nextStep() {
            if (this.currentStep < 3) {
            this.currentStep++;
        }
        },
        prevStep() {
            if (this.currentStep > 1) {
            this.currentStep--;
      }
        },
        async handleSubmit() {
            try {
                const response = await axios.post('http://localhost:3000/addClient', {
                    nom: this.nom,
                    prenom: this.prenom,
                    date_naissance: this.date_naissance,
                    lieu_naissance: this.lieu_naissance,
                    sexe: this.sexe,
                    telephone: this.telephone,
                    email: this.email,
                    localisation: this.localisation,
                    mot_de_passe: this.mot_de_passe,
                    mesures: this.clientData.mesures
                });
                console.log(response.data.message);
            } catch (error) {
                console.log('Echec de l\'ajout du client', error.response ? error.response.data : error.message);
            }
        },
        getMesureLabel(key) {
            const mesure = this.mesuresDisponibles.find(m => m.key === key);
            return mesure ? mesure.label : key;
        }
    }
};
</script>

<style scoped>
 body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
}

h1 {
    font-size: 24px;
    margin: 0;
}

nav a {
    text-decoration: none;
    color: #888;
}

nav span {
    color: #aaa;
}

.stepper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 0 20px; /* Ajoutez du padding pour éloigner un peu les éléments des bords */
    position: relative; 
    /* Pour positionner les lignes */
    /*padding-bottom: 20px;
    border-bottom: 1px solid #eaeaea;*/
}

.step {
    text-align: center;
    position: relative; /* Nécessaire pour positionner la ligne */
}

.line {
    content: '';
    position: absolute;
    top: 25px; /* Ajustez cette valeur selon vos besoins */
    width: 100%; /* Longueur de la ligne */
    height: 2px; /* Épaisseur de la ligne */
    background-color: #ccc; /* Couleur de la ligne */
    z-index: -1; /* Pour que la ligne soit derrière les icônes et le texte */
}

.step:first-child .line {
    display: none; /* Pas de ligne avant la première étape */
}

.step:not(:last-child) .line {
    left: 50%; /* Centre la ligne */
    transform: translateX(-50%); /* Corrige la position pour centrer la ligne */
}

/*.icon i {
    font-size: 24px;  /* Ajuste la taille de l'icône */
    /*color: #667882;    Exemple de couleur pour la confirmation (vert) 
    margin-right: 5px;
}*/

/* .step .icon i.fa-ruler {
    color: #667882;  Exemple de couleur pour les mesures (jaune) 
}*/

/*.step .icon i.fa-check-circle {
    color: #667882;   Exemple de couleur pour la confirmation (vert) 
}*/

.icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #ddd;  /* Couleur par défaut du fond */
    transition: background-color 0.3s ease;  /* Transition douce */
}

/* Couleur quand l'étape est en cours */
.icon.current {
    background-color: #ffc107; /* Couleur en cours (par exemple, jaune) */
}

.step .icon {
    font-size: 24px;
    background-color: #eaeaea;
    color: #666;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    margin: 0 auto 10px auto;
}

.step.active .icon {
    background-color: #007bff;
    color: white;
}

.step span {
    font-size: 14px;
    color: #666;
}

.form-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.name-box {
    display: flex;
    gap: 20px; /* Espace entre le nom et le prénom */
}

.input {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    width: 100%; /* Assurez-vous que les inputs prennent 100% de la largeur disponible */
}


.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.form-group label {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
}

.form-group input, 
.form-group select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-btn{
    display: flex;
    justify-content: center; /* Centre le contenu horizontalement */
    margin-top: 20px; /* Espace au-dessus du bouton */
}

.form-action {
    /*text-align: right;*/
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn {
  margin-top: 20px;
  font-size: 17px;
  background: rgb(2, 34, 72);
  border: none;
  width: 20%;
  border-radius: 20px;
  height: 35px;
  color: white;
  left: 50%;
}

.btn-prev {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
}

.btn-suivant {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
}

.input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

.center-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centre horizontalement */
    justify-content: center; /* Centre verticalement */
}

.full-width {
    width: 50%; /* Assure que l'élément prend toute la largeur */
}


.profile-section {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

.profile-header {
  text-align: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.personal-info {
  text-align: left;
  width: 100%;
  margin-top: 20px;
}

.personal-info p {
  font-size: 20px;
  margin: 5px 0;
}

.measurements-section {
  margin-top: 30px;
  width: 100%;
}

.measurements-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.measurements-table {
  width: 100%;
  border-collapse: collapse;
}

.measurements-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}
/*.table-mesures {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.table-mesures th, .table-mesures td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
}

.table-mesures th {
    background-color: #f8f9fa;
    color: #6c757d;
    text-align: center;
}

.btn-retirer {
    background-color: #ffc107;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-ajouter {
    background-color: #28a745;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
    margin-left: auto; /* Aligne le bouton à droite */
    /*margin-right: 0;
}*/
</style>
