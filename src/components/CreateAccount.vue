<template>
  <div class="container monda-font animate__animated animate__fadeInDown">
    <nav>
      <img src="" alt="" />
    </nav>
    <div>
      <h2 class="monda-font">Inscription</h2>
    </div>
    <form @submit.prevent="createAccount">
      <div class="input-field">
        <div> <label for="name">Nom </label></div>
        <input class="input" type="text" id="nom" v-model="nom" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Prénom </label></div>
        <input class="input" type="text" id="prenom" v-model="prenom" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Sexe</label></div>
        <select id="sexe" v-model="sexe" required>
          <option value="Feminin">Feminin</option>
          <option value="Masculin">Masculin</option>
        </select>
      </div><br>
      <div class="input-field">
        <label for="photoProfil">Photo de profil</label><br><br>
        <input type="file" id="avatar" @change="handleImageUpload" />
      </div><br>
      <div class="input-field">
        <div> <label for="telephone">Telephone</label></div>
        <input class="input" id="phoneNumberU" v-model="phoneNumberU" required>
      </div>
      <div class="input-field">
        <div> <label for="telephone">Email</label></div>
        <input class="input" id="mail" v-model="mail" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Localisation</label></div>
        <input class="input" type="text" id="localisation" v-model="localisation" required>
      </div>
      <!--<div class="input-field">
        <div> <label for="name">Type d'utilisateur</label></div><br>
        <input type="text" id="status" v-model="status" value="Admin" required readonly>
      </div><br>-->


      <div class="input-field">
        <div><label for="password">Mot de passe:</label></div>
        <div>
          <input class="input" type="password" id="password" v-model="password" required>

        </div>
      </div>
      <button class="btn" @click="submit">
        <span>Inscription</span><br><br>
        <p style="color: black">vous avez un compte? <router-link to="/">Se connecter</router-link></p>
      </button>
    </form>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>
<script>
import axios from 'axios';
import config from '../config';
export default {

  components: {
  },
  data() {

    return {
      nom: '',
      prenom: '',
      sexe: '',
      phoneNumberU: '',
      mail: '',
      localisation: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
  },
  methods: {
    async createAccount() {
      try {
        console.log("hey", this.nom);
        console.log("hey", this.prenom);
        console.log("hey", this.sexe);
        console.log("hey", this.phoneNumberU);
        console.log("hey", this.mail);
        console.log("hey", this.localisation);
        console.log("hey", this.password);

        const response = await axios.post(`${config.apiBaseUrl}/users`, {
          nom: this.nom,
          prenom: this.prenom,
          sexe: this.sexe,
          phoneNumberU: this.phoneNumberU,
          mail: this.mail,
          localisation: this.localisation,
          password: this.password

        });
        console.log('Réponse du serveur :', response.data);
        this.successMessage = 'Inscription réussie !';
        alert('Compte crée avec Success');
        this.resetForm();
        this.$router.push('/');
      } catch (error) {
        console.log('Erreur lors de la creation du compte:', error);
        // Vérifiez si error.response et error.response.data existent
        if (error.response) {
          this.errorMessage = "Échec de l'inscription :" + error.response.data.message;
        } else {
          // Cas où error.response est indéfini, indiquant une autre erreur
          this.errorMessage = "Échec de l'inscription : Une erreur s'est produite. Vérifiez votre connexion.";
        }
        alert('Echec lors de la création du compte')
      }
    },
    resetForm() {
      this.nom = '';
      this.prenom = '';
      this.sexe = '',
      this.phoneNumberU = '';
      this.mail = '';
      this.localisation = '';
      this.password = '';
      this.successMessage = '';
      this.errorMessage = '';
    }
  }
};

</script>

<style scoped>
h2 {
  font-size: 40px;
  font-weight: bold;
  color: rgb(2, 34, 72);
  display: flex;
  justify-content: center;
  margin-top: 5px;
}


.stext {
  color: rgba(0, 0, 0, 0.2);
  font-size: 13px;
  margin-top: -20px;
}

.container {
  text-align: left;
  width: 450px;
  margin: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  margin-top: 100px;
}

form {
  width: 100%;
  margin-top: 5px;

}

.monda-font {
  font-family: 'Monda', sans-serif;
}

.input {
  width: 98%;
  height: 30px;
  border: none;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  margin-top: 5px;

}


input:nth-child(2) {
  margin-bottom: 20px;
}

label {
  font-weight: 700;
  font-size: 16px;
  color: rgb(2, 34, 72);

}

.mot {
  color: rgb(2, 34, 72);
  font-weight: 500;
  font-size: 15px;
}

.affiche {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 38% !important;
}

.btn {
  margin-top: 20px;
  font-size: 17px;
  background: rgb(2, 34, 72);
  border: none;
  width: 100%;
  border-radius: 10px;
  height: 35px;
  color: white;
}

.pas {
  font-weight: 700;
  color: rgb(2, 34, 72);
  font-size: 14px;
}

.pas a {
  text-decoration: none;
  color: orangered;
}

.loading-indicator::after {
  content: "";
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 3px solid #06283D;
  border-top-color: rgb(2, 34, 72);
  border-bottom-color: rgb(2, 34, 72);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-indicator {
  display: flex;
  justify-content: center;
  height: 100px;
}

/*type file*/
.box {
  font-size: 15px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  outline: none;
}

::-webkit-file-upload-button {
  color: white;
  background: rgb(2, 34, 72);
  padding: 10px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  outline: none;
}

::-webkit-file-upload-button:hover {
  background: rgb(2, 34, 72);
}
</style>