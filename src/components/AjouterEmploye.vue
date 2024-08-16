<template>

  <div class="container monda-font animate__animated animate__fadeInDown">
    <nav>
      <img src="" alt="" />
    </nav>
    <div>
      <h2 class="monda-font">Ajouter un employé</h2>
    </div>
    <form @submit.prevent="addEmploye">
      <div class="input-field">
        <div> <label for="name">Nom </label></div>
        <input class="input" type="text" id="addEmployeusername" v-model="username" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Prénom </label></div>
        <input class="input" type="text" id="addEmployesurname" v-model="surname" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Date de naissance</label></div>
        <input class="input" type="date" id="addEmployebirthday" v-model="date_naissance" required>
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
        <div> <label for="telephone">Telephone</label></div>
        <input class="input" id="addEmployephone" v-model="contact" required>
      </div>
      <div class="input-field">
        <div> <label for="telephone">Email</label></div>
        <input class="input" id="addEmployeemail" v-model="email" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Localisation</label></div>
        <input class="input" type="text" id="addEmployelocalisation" v-model="localisation" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Type d'utilisateur</label></div><br>
        <select id="type_u" v-model="type_u" required>
          <option value="client">Client</option>
          <option value="Employé">Employé</option>
          <option value="admin">Admin</option>
        </select>
      </div><br>


      <div class="input-field">
        <div><label for="password">Mot de passe:</label></div>
        <div>
          <input class="input" type="password" id="addEmployepassword" v-model="password" required>

        </div>
      </div>
      <button class="btn" type="submit">
        <span>Enregistrer</span>
      </button>
    </form>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      surname: '',
      date_naissance: '',
      sexe: '',
      contact: '',
      email: '',
      localisation: '',
      type_u: '',
      password: '',
      admin_id: '', // Ajouter l'ID de l'admin ici
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
  },
  methods: {
    async addEmploye() {
      try {
        const response = await axios.post('http://localhost:3000/addEmploye', {
          id_admin: localStorage.getItem('userId'),
          username: this.username,
          type_u: this.type_u,
          sexe: this.sexe,
          surname: this.surname,
          date_naissance: this.date_naissance,
          contact: this.contact,
          email: this.email,
          localisation: this.localisation,
          password: this.password
        }, {
        });

        console.log(response.data.message);
      } catch (error) {
        // Vérifier si l'erreur est liée à l'authentification
        if (error.response && error.response.status === 401) {
          console.log('Erreur d\'authentification');
        } else {
          console.log('Echec de l\'ajout de l\'employé');
        }
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