<template>

  <body>
    <div class="container monda-font ">
      <nav>
        <img src="" alt="" />
      </nav>
      <div>
        <h2 class="monda-font">Connexion</h2>
      </div>
      <form @submit.prevent="login">
        <div class="input-field">
          <div><label for="email">Téléphone/Email</label></div>
          <input id="contact" v-model="email" required>
        </div>
        <div class="input-field">
          <div><label for="password">Mot de passe</label></div>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div>
          <button class="btn" type="submit">
            Se connecter
          </button>
          <p>vous n'avez pas de compte? <router-link to="/CreateAccount">S'inscrire</router-link></p>
        </div>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </body>
</template>
<script>

// Dans votre composant Vue.js
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password,
        });

        const { token, userId } = response.data;

        // Stocker l'ID de l'utilisateur dans le localStorage
        localStorage.setItem('userId', userId);

        // Stocker le jeton d'authentification dans une variable ou le localStorage
        this.token = token;

        // Rediriger l'utilisateur vers une page protégée ou effectuer d'autres actions
        this.$router.push('/acceuilPage');
      } catch (error) {
        console.error(error);
        // Afficher un message d'erreur à l'utilisateur
      }
    },
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/3.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 25px;
  font-weight: bold;
  color: rgb(2, 34, 72);

}

.stext {
  color: rgba(0, 0, 0, 0.2);
  font-size: 13px;
  margin-top: -20px;

}

.container {
  text-align: left;
  width: 450px;
  height: 450px;
  margin: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2) !important;
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  margin-top: 120px;

}

form {
  width: 100%;
  margin-top: 20px;
}

.monda-font {
  font-family: 'Monda', sans-serif;
}

input {
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
  color: rgba(6, 40, 61, 0.555)
}

.mot {
  color: rgba(6, 40, 61, 1);
  font-weight: 500;
  font-size: 15px;
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
  color: rgba(6, 40, 61, 1);
  font-size: 14px;
}

.pas a {
  text-decoration: none;
  color: rgb(214, 106, 5);
}

.loading-indicator::after {
  content: "";
  display: inline-block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 3px solid white;
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
</style>