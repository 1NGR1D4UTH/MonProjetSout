<template>
    <div class="container monda-font animate__animated animate__fadeInDown">
      <div class="header">
        <h2 class="monda-font">Ajouter un modèle</h2>
      </div>
      <form @submit.prevent="addModel" class="form">
        <div class="input-field">
          <label for="modelName">Nom du modèle</label>
          <input
            class="input"
            type="text"
            id="modelName"
            v-model="modelName"
            placeholder="Entrez le nom du modèle"
            required
          />
        </div>
  
        <div class="input-field">
          <label for="modelDescription">Description</label>
          <textarea
            class="input textarea"
            id="modelDescription"
            v-model="modelDescription"
            placeholder="Entrez la description"
            required
          ></textarea>
        </div>
  
        <div class="input-field">
          <label for="modelPhoto">Photo du modèle</label>
          <input
            type="file"
            id="modelPhoto"
            @change="handleImageUpload"
            class="file-input"
          />
        </div>
  
        <div class="input-field">
          <label for="modelPrice">Prix</label>
          <input
            class="input"
            type="number"
            id="modelPrice"
            v-model="modelPrice"
            placeholder="Entrez le prix"
            required
          />
        </div>
  
        <button class="btn" type="submit">
          Ajouter le modèle
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        modelName: '',
        modelDescription: '',
        modelPrice: '',
        imageUrl: '',
      };
    },
    methods: {
      async addModel() {
        try {
          const formData = new FormData();
          formData.append('modelName', this.modelName);
          formData.append('modelDescription', this.modelDescription);
          formData.append('modelPrice', this.modelPrice);
          formData.append('modelPhoto', this.imageUrl);
  
          const response = await axios.post('http://localhost:3000/addModel', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          console.log(response.data.message);
        } catch (error) {
          console.log("Erreur lors de l'ajout du modèle");
        }
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        this.imageUrl = file;
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #022248;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form {
    width: 100%;
    margin-top: 20px;
  }
  
  .input-field {
    margin-bottom: 25px;
  }
  
  .input {
    width: 100%;
    height: 45px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    transition: border 0.3s ease;
  }
  
  .input:focus {
    border-color: #022248;
  }
  
  .textarea {
    height: 120px;
    resize: none;
  }
  
  .file-input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  .file-input:hover {
    background-color: #f1f1f1;
  }
  
  .btn {
    display: block;
    width: 100%;
    height: 50px;
    background-color: #022248;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #044077;
  }
  
  .container {
    width: 600px;
    margin: 0 auto;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background-color: #fff;
  }
  
  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    display: inline-block;
    color: #022248;
  }
  </style>
  