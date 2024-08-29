<template>

<div class="container monda-font animate__animated animate__fadeInDown">
    
    <div>
      <h2 class="monda-font">Ajouter une commmande</h2>
    </div>
    <form @submit.prevent="addCommand">
      <div class="input-field">
        <div> <label for="name">Montant </label></div>
        <input class="input" type="text" id="addCommandamount" v-model="amount" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Montant versé </label></div>
        <input class="input" type="text" id="addCommandadvance_amount" v-model="advance_amount" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Montant restant </label></div>
        <input class="input" type="text" id="addCommandrest_amount" v-model="rest_amount" required>
      </div>
      
      <!--<div class="input-field">
        <label for="photoModel">Photo modèle</label><br><br>
        <input type="file" id="addCommandi_modele" @change="handleImageUpload" />
      </div><br>-->
      <div class="input-field">
        <div> <label for="name">Nom du modèle </label></div>
        <input class="input" type="text" id="addCommandmodel" v-model="model" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Date </label></div>
        <input class="input" type="date" id="addCommanddate" v-model="date" required>
      </div>
      <div class="input-field">
        <div> <label for="name">Statut</label></div>
        <select id="sexe" v-model="statut" required>
          <option value="client">A traiter</option>
          <option value="admin">En couture</option>
          <option value="admin">Livré au client</option>
        </select>
      </div><br>
      <div class="input-field">
        <div> <label for="name">Type de tissu </label></div>
        <input class="input" type="text" id="addCommandtissue" v-model="tissue" required>
      </div>
    
      <button class="btn" type="submit">
        <span>Ajouter</span><br><br>
      </button>
    </form>
    
  </div>
  </template>
  
  <script>
import axios from 'axios';
export default {
  data() {
    return {
      amount: '',
      advance_amount: '',
      rest_amount: '',
      model: '',
      date: '',
      statut: '',
      tissue: '',
      id_client: '', // Ajouter l'ID de l'admin ici
      create_by: '', 
      successMessage: '',
      errorMessage: ''
    };
  },
  mounted() {
  },
  methods: {
    
    async addCommand() {
      try {
        const response = await axios.post('http://localhost:3000/addCommand', {
          create_by: localStorage.getItem('userId'),
          amount: this.amount,
          advance_amount: this.advance_amount, 
          rest_amount: this.rest_amount,
          model: this.model,
          date: (this.date),
          statut: this.statut,
          tissue: this.tissue
          
        }, {
        });

        console.log(response.data.message);
      } catch (error) {
          console.log('Echec de l\'ajout de la commande');
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
  gap: 10px; /* Espace entre les champs */
  }
  .input {
  flex: 1; /* Pour que les champs prennent la même largeur */
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