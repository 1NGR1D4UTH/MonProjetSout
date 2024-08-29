<template>
    <div id="editModal" class="modal">
    <div class="container">
        <span class="close" @click="closeEditModal">&times;</span>
        <h2>Modifier un employé</h2>
        <form @submit.prevent="updateEmploye">
            <div class="input-field">
        <div> <label for="name">Nom </label></div>
        <input class="input" type="text" id="updateEmployeusername" v-model="username">
      </div>
      <div class="input-field">
        <div> <label for="name">Prénom </label></div>
        <input class="input" type="text" id="updateEmployesurname" v-model="surname">
      </div>
      <div class="input-field">
        <div> <label for="name">Date de naissance</label></div>
        <input class="input" type="date" id="updateEmployebirthday" v-model="date_naissance">
      </div>
      <div class="input-field">
        <div> <label for="name">Sexe</label></div>
        <select id="sexe" v-model="sexe" required>
          <option value="client">Feminin</option>
          <option value="admin">Masculin</option>
        </select>
      </div><br>
      <div class="input-field">
        <div> <label for="telephone">Telephone</label></div>
        <input class="input" id="updateEmployephone" v-model="contact">
      </div>
      <div class="input-field">
        <div> <label for="telephone">Email</label></div>
        <input class="input" id="updateEmployeemail" v-model="email">
      </div>
      <div class="input-field">
        <div> <label for="name">Localisation</label></div>
        <input class="input" type="text" id="updateEmployelocalisation" v-model="localisation">
      </div>

      <button class="btn" type="submit">
        <span>Enregistrer</span><br><br>
        
      </button>
        </form>
    </div>
</div>
</template>
<script>

  import axios from 'axios'; 
  
  export default {
    data() {
      return {
        email: '', 
        user: {},
      };
    },
    mounted() {
      this.email = this.getParamsFromUrl().email;
      this.getUserFromUrl();
    },
    methods: {
      async getUserFromUrl() {
        try {
          const response = await axios.get(`http://localhost:3000/users/${this.email}`);
          this.user = response.data;

          this.username = this.user.nom; 
          this.surname = this.user.prénom;
          this.date_naissance = this.user.date_de_naissance;
          this.sexe = this.user.sexe;
          this.contact = this.user.telephone; 
          this.localisation = this.user.localisation;
          this.email = this.user.email;

        } catch (error) {
          console.error('Erreur lors de la récupération de l\'employé:', error);
        }
      },
      getParamsFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
          email: urlParams.get('email')
        };
      },
      async updateEmploye() {
        try {
          const response = await axios.patch(`http://localhost:3000/users/${this.email}`, this.user);
          if (response.status >= 200 && response.status < 300) {
            console.log('Employé mis à jour avec succès:', response.data);
            this.$router.push('/');
          } else {
            console.error('Erreur lors de la mise à jour de l\'employé:', response.data);
          }
        } catch (error) {
          console.error('Erreur lors de la mise à jour de l\'employé:', error);
        }
      },
     // Fonction pour formater la date
    

    }
  }

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


</style>
