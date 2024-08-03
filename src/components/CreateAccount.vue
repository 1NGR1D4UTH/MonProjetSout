<template>
  <div class="container monda-font animate__animated animate__fadeInDown">
    <nav>
      <img src="" alt="" />
    </nav>
    <div>
      <h2 class="monda-font">Inscription</h2>
    </div>
    <form @submit.prevent="createAcount">
      <div class="input-field">
        <div> <label for="name">Nom </label></div>
        <input class="input" type="text" id="signupusername" v-model="username" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Prénom </label></div>
        <input class="input" type="text" id="signupsurname" v-model="surname" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Date de naissance</label></div>
        <input class="input" type="date" id="signupbirthday" v-model="date_naissance" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Sexe</label></div>
        <select id="sexe" v-model="sexe" required>
          <option value="client">Feminin</option>
          <option value="admin">Masculin</option>
        </select>
      </div>
      <div class="input-field">
        <label for="photoProfil">Photo de profil</label>
        <input type="file" id="signupprofile" @change="handleImageUpload" />
      </div>
      <div class="input-field">
        <div> <label for="telephone">Telephone</label></div>
        <input class="input" id="signupphone" v-model="contact" required>
      </div>
      <div class="input-field">
        <div> <label for="telephone">Email</label></div>
        <input class="input" id="signupemail" v-model="email" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Localisation</label></div>
        <input class="input" type="text" id="signuplocalisation" v-model="localisation" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Type d'utilisateur</label></div>
        <select id="type_u" v-model="type_u" required>
          <option value="client">Client</option>
          <option value="client">Employé</option>
          <option value="admin">Admin</option>
        </select>
      </div>


      <div class="input-field">
        <div><label for="password">Mot de passe:</label></div>
        <div>
          <input class="input" type="password" id="signuppassword" v-model="password" required>

        </div>
      </div>
      <button class="btn" type="submit">
        <span>Inscription</span>
        <p style="color: black">vous avez un compte? <router-link to="/">Se connecter</router-link></p>
      </button>
    </form>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {

  components: {
  },
  data() {

    return {

    };
  },
  mounted() {
  },
  methods: {
    async createAcount() {
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          username : this.username,
          surname: this.surname,
          date_naissance: this.date_naissance,
          sexe: this.sexe,
          contact: this.contact,
          email: this.email,
          localisation: this.localisation,
          type_u: this.type_u,
          password: this.password,
          
         
        });
        
        console.log(response.data.message);
      } catch (error) {
        console.log('echec');
      }
    },
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
  margin-top: 20px;
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