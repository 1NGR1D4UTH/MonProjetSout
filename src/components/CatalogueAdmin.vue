<template>
  <div class="catalogue-container">
      <h1>Catalogue de l'Atelier</h1>
      <!-- Barre de recherche -->
      <div class="search-container">
          <i class="fa fa-search search-icon"></i>
          <input v-model="searchQuery" type="text" placeholder="Rechercher un modèle..." class="search-bar" />
      </div>
      <div class="model-grid">
          <p v-if="filteredModels.length === 0" class="no-models">Aucun modèle trouvé</p>
          <div v-for="model in filteredModels" :key="model.id" class="model-card">
              <img :src="model.image" :alt="model.name" class="model-image" />
              <div class="model-info">
                  <h2>{{ model.name }}</h2>
                  <p>{{ model.description }}</p>
                  <p class="model-prix">{{ model.prix }} FCFA</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          searchQuery: '',
          models: [
              {
                  id: 1,
                  name: 'Robe africaine',
                  description: 'Robe légère et élégante avec les couleurs de l\'Afrique.',
                  image: require('../assets/mode2.jpg'),
                  prix: 5200
              },
              {
                  id: 2,
                  name: 'Robe d’été',
                  description: 'Robe légère et élégante pour les journées ensoleillées.',
                  image: require('../assets/OIP (1).jpeg'),
                  prix: 7500
              },
              {
                  id: 3,
                  name: 'Robe de soirée',
                  description: 'Robe pour un les évènements chics.',
                  image: require('../assets/OIP (4).jpeg'),
                  prix: 9000
              },
              {
                  id: 4,
                  name: 'Robe dos nue',
                  description: 'robe casual pour un look décontracté.',
                  image: require('../assets/OIP.jpeg'),
                  prix: 6000
              },
              {
                  id: 5,
                  name: 'Robe de soirée',
                  description: 'Robe pour les soirées.',
                  image: require('../assets/R (1).jpeg'),
                  prix: 12000
              },
              {
                  id: 6,
                  name: 'Robe de mariée',
                  description: 'Robe pour marqué le plus beau jour de votre vie.',
                  image: require('../assets/mode4.jpg'),
                  prix: 25000
              }
          ]
      };
  },
  computed: {
      // Filtrer les modèles en fonction du texte saisi dans la barre de recherche
      filteredModels() {
          return this.models.filter(model =>
              model.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
      }
  }
};
</script>

<style scoped>
.catalogue-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.search-container {
  position: relative;
  width: 50%;
  margin: 0 auto 20px auto;
}

.search-bar {
  padding: 10px 40px 10px 30px;
  /* Ajuster pour ajouter de l'espace à gauche pour l'icône */
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

/* Icône de recherche */
.search-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #aaa;
}

/* Message "Aucun modèle trouvé" */
.no-models {
  font-size: 1.2rem;
  color: #e91e63;
  font-weight: bold;
  margin-top: 20px;
}

.model-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.model-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 15px;
  max-width: 300px;
  transition: transform 0.3s ease-in-out;
}

.model-card:hover {
  transform: translateY(-10px);
}

.model-image {
  max-width: 100%;
  border-radius: 10px;
}

.model-info {
  margin-top: 10px;
}

.model-prix {
  font-size: 1.5rem;
  color: #e91e63;
  font-weight: bold;
}
</style>