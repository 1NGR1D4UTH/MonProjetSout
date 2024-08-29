<template>

  <div class="container monda-font animate__animated animate__fadeInDown">
    <nav>
      <img src="" alt="" />
    </nav>
    <div>
      <h2 class="monda-font">Ajouter un client</h2>
    </div>
    <form @submit.prevent="addClient">
      <div class="input-field">
        <div> <label for="name">Nom et Prénom </label></div>
        <div class="form-row">
          <input class="input" type="text" id="addClientusername" v-model="nom" required>
          <input class="input" type="text" id="addClientsurname" v-model="prenom" required>
        </div>
      </div>

      <div class="input-field">
        <div> <label for="name">Date et Lieu de naissance</label></div>
        <div class="form-row">
          <input class="input" type="date" id="addClientbirthday" v-model="date_naissance" required>
          <input class="input" type="text" id="addClientlieuNaissance" v-model="lieu_naissance" placeholder="A"
            required>
        </div>
      </div>
      <div class="input-field">
        <div> <label for="name">Sexe</label></div>
        <select id="sexe" v-model="sexe" required>
          <option value="Feminin">Feminin</option>
          <option value="Masculin">Masculin</option>
        </select>
      </div><br>
      <!--<div class="input-field">
        <label for="photoProfil">Photo de profil</label><br><br>
        <input type="file" id="signupprofile" @change="handleImageUpload" />
      </div><br>-->
      <div class="input-field">
        <div> <label for="telephone">Adresse email et Numéro de téléphone </label></div>
        <div class="form-row">
          <input class="input" id="addClientemail" v-model="email" placeholder="Email" required>
          <input class="input" id="addClientphone" v-model="telephone" required>
        </div>
      </div>

      <div class="input-field">
        <div> <label for="name">Localisation</label></div>
        <input class="input" type="text" id="addClientlocalisation" v-model="localisation" required>
      </div>
      <div class="input-field">
        <div><label for="password">Mot de passe:</label></div>
        <div>
          <input class="input" type="password" id="addClientpassword" v-model="mot_de_passe" required>

        </div>
      </div>
      <button class="btn" type="submit">
        <span>Ajouter</span>
      </button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      nom: '',
      prenom: '',
      date_naissance: null,
      lieu_naissance: '',
      sexe: '',
      telephone: '',
      email: '',
      localisation: '',
      mot_de_passe: '',
      create_by: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
  },
  methods: {
    async addClient() {
      try {
        // Convertir date_naissance en objet Date si ce n'est pas déjà fait
        const dateNaissance = new Date(this.date_naissance);

        // Vérifiez si la date est valide
        if (isNaN(dateNaissance.getTime())) {
          throw new Error('Date de naissance invalide');
        }

        const response = await axios.post('http://localhost:3000/addClient', {
          create_by: localStorage.getItem('userId'),
          nom: this.nom,
          sexe: this.sexe,
          prenom: this.prenom,
          date_naissance: dateNaissance.toISOString().split('T')[0], // Format YYYY-MM-DD
          telephone: this.telephone,
          email: this.email,
          localisation: this.localisation,
          lieu_naissance: this.lieu_naissance,
          mot_de_passe: this.mot_de_passe
        });

        console.log(response.data.message);
      } catch (error) {
        console.log('Echec de l\'ajout du client', error.response ? error.response.data : error.message);
      }
    }
  }
};

</script>


<style>
h2 {
  font-size: 40px;
  font-weight: bold;
  color: rgb(2, 34, 72);
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.form-row {
  display: flex;
  gap: 10px;
  /* Espace entre les champs */
}

.input {
  flex: 1;
  /* Pour que les champs prennent la même largeur */
}

.stext {
  color: rgba(0, 0, 0, 0.2);
  font-size: 13px;
  margin-top: -20px;
}

.container {
  text-align: left;
  width: 700px;
  margin: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 15px;
  /*margin-top: 100px;*/
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
  width: 50%;
  border-radius: 10px;
  height: 35px;
  color: white;
  left: 100%;
}

/*.pas {
  font-weight: 700;
  color: rgb(2, 34, 72);
  font-size: 14px;
}

.pas a {
  text-decoration: none;
  color: orangered;
}*/

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