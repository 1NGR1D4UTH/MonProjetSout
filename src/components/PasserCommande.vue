<template>
  <div v-if="showModal" class="container">
    <div class="form-container">
      <i class="fas fa-window-close" @click="closePage" style="font-size: 50px; color: red; position: absolute; top: 10px; right: 10px; cursor: pointer;"></i>
      <h1>Formulaire de commande</h1>
      <form action="#" method="POST" enctype="multipart/form-data">

        <!-- Nom du modèle et Mesures (alignés sur la même ligne) -->
        <div class="form-group half-width">
          <label for="model-name">Nom du modèle :</label><br><br>
          <input type="text" id="model-name" name="model-name" placeholder="Nom du modèle" required>
        </div>

        <div class="form-group half-width">
          <label for="measurements">Mesures :</label><br><br>
          <input type="text" id="measurements" name="measurements" placeholder="Saisir les mesures" required>
        </div>

        <!-- Photo du modèle (en bas du nom du modèle) -->
        <div class="form-group half-width">
          <label for="model-photo">Télécharger la photo du modèle :</label>
          <input type="file" id="model-photo" name="model-photo" accept="image/*">
        </div>

        <!-- Photo des mesures (en bas du champ Mesures) -->
        <div class="form-group half-width">
          <label for="photo">Télécharger la photo des mesures :</label>
          <input type="file" id="photo" name="photo" accept="image/*">
        </div>

        <!-- Type de tissu (à pleine largeur) -->
        <div class="form-group full-width">
          <label for="fabric-type">Type de tissu :</label><br><br>
          <input type="text" id="fabric-type" name="fabric-type" placeholder="Type de tissu" required>
        </div>

        <!-- Bouton d'envoi (à pleine largeur) -->
        <div class="form-group ">
          <button type="submit">Envoyer</button>
        </div>

      </form>
    </div>
  </div>

</template>



<script>


export default {

  props: ['showModal'],
  data() {
    return {

    };
  },
  methods: {
    closePage() {
      this.$emit('close');
    },


  }
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;

}

/*body {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}*/

/* Conteneur du formulaire */
.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width:900px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.form-container h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

/* Style du formulaire */
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Groupes avec largeur complète */
.full-width {
  width: 48%;
  margin-bottom: 15px;
}

/* Groupes avec moitié de la largeur */
.half-width {
  width: 48%;
  /* Alignement des champs Nom du modèle et Mesures */
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="file"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
}

input[type="file"] {
  border: none;
}

.form-group button {
  padding-right: 5rem;

}

button {
  padding: 10px 20px;
  background-color: rgb(2, 34, 72);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 50%;
  display: flex;
  margin-top: 42px;

}

button:hover {
  background-color: #16a085;
}
</style>