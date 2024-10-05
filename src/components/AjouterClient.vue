<template>
    <NavBarPage />
    <div class="full-background">
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
                    <div class="icon" :class="{ completed: step > 1, current: step === 1 }"><i class="fas fa-user"></i>
                    </div>
                    <span>INFORMATIONS CLIENT</span>
                    <div class="line"></div>
                </div>
                <!-- <div class="step" :class="{ active: step === 2 }">
                    <div class="icon" :class="{ completed: step > 2, current: step === 2 }"><i class="fas fa-ruler"></i></div>
                    <span>MESURES CLIENT</span>
                    <div class="line"></div>
                </div> -->
                <!-- <div class="step" :class="{ active: step === 3 }">
                    <div class="icon" :class="{ completed: step === 3, current: step === 3 }"><i class="fas fa-check-circle"></i></div>
                    <span>CONFIRMATION</span>
                </div> -->
            </div>

            <!-- Formulaire pour chaque étape -->
            <form @submit.prevent="handleSubmit">
                <div>
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
                                <input class="input" type="date" id="addClientbirthday" v-model="date_naissance"
                                    required>
                                <input class="input" type="text" id="addClientlieuNaissance" v-model="lieu_naissance"
                                    required>
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
                        <button type="submit" class="btn-suivant">Confirmer</button>
                    </div>
                </div>
                <!-- <div v-if="currentStep === 2" class="step-3">
                    <div class="profile-section center-content">
                        <div class="profile-section">
                            <img :src="clientData.photo" alt="Photo du client" class="profile-pic" v-if="clientData.photo" />
                            <h2>{{ clientData.nom }}</h2>
                        </div>

                        <div class="personal-info">
                            <p><strong>Sexe :</strong> {{ clientData.sexe }}</p>
                            <p><strong>Téléphone :</strong> {{ clientData.telephone }}</p>
                            <p><strong>E-mail :</strong> {{ clientData.email }}</p>
                            <p><strong>Localisation :</strong> {{ clientData.localisation }}</p>
                        </div>
                        <div class="measurements-section">
                            <h3>Mesures</h3>
                            <div class="client-measures">
                                <div v-for="(value, key) in clientData.mesures" :key="key">
                                    <p><strong>{{ getMesureLabel(key) }} :</strong> {{ value }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-action">
                        <button type="button" @click="prevStep" class="btn-prev" style="display: flex;justify-content: space-between;margin-top: 20px;">Précédent</button>
                        <button type="submit" class="btn-suivant">Confirmer</button>
                    </div>
                </div> -->
            </form>
        </div>
    </div>
</template>

<script>
import NavBarPage from './NavBarPage.vue';
import axios from 'axios';
import config from '../config';

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
            mesuresDisponibles: {
                enfant: {
                    // Ajouter ici les mesures spécifiques pour les enfants
                    carrure: '',
                    poitrine: '',
                    taille: '',
                    // Ajoutez d'autres mesures nécessaires
                },
                femme: {
                    // Ajouter ici les mesures spécifiques pour les femmes
                    carrure: '',
                    poitrine: '',
                    taille: '',
                    // Ajoutez d'autres mesures nécessaires
                },
                homme: {
                    // Ajouter ici les mesures spécifiques pour les hommes
                    carrure: '',
                    poitrine: '',
                    taille: '',
                    // Ajoutez d'autres mesures nécessaires
                }
            }
        };
    },
    methods: {
        setSelectedMeasures(type) {
            if (type in this.mesuresDisponibles) {
                this.clientData.mesures = { ...this.mesuresDisponibles[type] }; // Charger les mesures spécifiques
            } else {
                this.clientData.mesures = {}; // Réinitialiser si aucune option n'est sélectionnée
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
            }
        },
        nextStep() {
            // Validation des étapes avant de passer à la suivante
            if (this.currentStep === 1) {
                this.currentStep++;
            } else if (this.currentStep === 2) {
                // Pas de simulation ici, les mesures seront chargées en fonction de la sélection
                this.currentStep++;
                this.clientData.nom = `${this.nom} ${this.prenom}`;
                this.clientData.sexe = this.sexe;
                this.clientData.telephone = this.telephone;
                this.clientData.email = this.email;
                this.clientData.localisation = this.localisation;
                this.clientData.photo = this.photo; // Assurez-vous que cela est défini dans handleImageUpload
            }
        },
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.clientData.photo = e.target.result; // Enregistrez l'image dans clientData
                };
                reader.readAsDataURL(file);
            }
        },
        getMesureLabel(key) {
            // Fonction pour obtenir le label de la mesure en fonction de la clé
            const labels = {
                carrure: 'Carrure',
                poitrine: 'Poitrine',
                taille: 'Taille'
                // Ajoutez d'autres labels si nécessaire
            };
            return labels[key] || key; // Retournez la clé par défaut si non trouvé
        },
        async handleSubmit() {
            try {
                const response = await axios.post(`${config.apiBaseUrl}/addClient`, {
                    id_admin: localStorage.getItem('userId'),
                    nom: this.nom,
                    type_u: this.type_u,
                    sexe: this.sexe,
                    prenom: this.prenom,
                    telephone: this.telephone,
                    date_naissance: this.date_naissance,
                    lieu_naissance: this.lieu_naissance,
                    contact: this.contact,
                    email: this.email,
                    localisation: this.localisation,
                    mot_de_passe: this.mot_de_passe
                }, {
                });
                alert('Client ajouté avec succès !');
                console.log(response.data.message);
            } catch (error) {
                // Vérifier si l'erreur est liée à l'authentification
                if (error.response && error.response.status === 401) {
                    console.log('Erreur d\'authentification');
                } else {
                    console.log('Echec de l\'ajout du l\'client');
                }
            }
        },
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

.full-background {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh;
    /* Prend toute la hauteur de la page */
    padding: 20px;
    /* Ajoute un peu d'espace autour */
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
    padding: 0 20px;
    /* Ajoutez du padding pour éloigner un peu les éléments des bords */
    position: relative;
    /* Pour positionner les lignes */
    /*padding-bottom: 20px;
   border-bottom: 1px solid #eaeaea;*/
}

.step {
    text-align: center;
    position: relative;
    /* Nécessaire pour positionner la ligne */
}

.line {
    content: '';
    position: absolute;
    top: 25px;
    /* Ajustez cette valeur selon vos besoins */
    width: 100%;
    /* Longueur de la ligne */
    height: 2px;
    /* Épaisseur de la ligne */
    background-color: #ccc;
    /* Couleur de la ligne */
    z-index: -1;
    /* Pour que la ligne soit derrière les icônes et le texte */
}

.step:first-child .line {
    display: none;
    /* Pas de ligne avant la première étape */
}

.step:not(:last-child) .line {
    left: 50%;
    /* Centre la ligne */
    transform: translateX(-50%);
    /* Corrige la position pour centrer la ligne */
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
    background-color: #ddd;
    /* Couleur par défaut du fond */
    transition: background-color 0.3s ease;
    /* Transition douce */
}

/* Couleur quand l'étape est en cours */
.icon.current {
    background-color: #ffc107;
    /* Couleur en cours (par exemple, jaune) */
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
    gap: 20px;
    /* Espace entre le nom et le prénom */
}

.input {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    /* Assurez-vous que les inputs prennent 100% de la largeur disponible */
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

.form-btn {
    display: flex;
    justify-content: center;
    /* Centre le contenu horizontalement */
    margin-top: 20px;
    /* Espace au-dessus du bouton */
}

.form-action {
    /*text-align: right;*/
    display: flex;
    justify-content: flex-end;
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
    align-items: center;
    /* Centre horizontalement */
    justify-content: center;
    /* Centre verticalement */
}

.full-width {
    width: 50%;
    /* Assure que l'élément prend toute la largeur */
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
