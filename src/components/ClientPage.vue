<template>
  <NavBarPage/>
  <div class="full-background">
  <div class="container">
        <header>
            <h1>Clients</h1>
            <nav>
                <a href="#">Clients</a> / <span>Liste</span>
            </nav>
        </header>

        <div class="search-bar">
            <input type="text" placeholder="🔍 Search...">
            <div class="btn btn-edit"><router-link to="/AjouterClient" >+ Ajouter un client </router-link> </div> 
        </div>

        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Téléphone</th>
                    <th>Localisation</th>

                </tr>
            </thead>
            <tbody>
                <!-- Les lignes des clients seront ajoutées ici dynamiquement -->
            </tbody>
        </table>

        <!--<div class="pagination">
            <span>&laquo;</span>
            <span>&raquo;</span>
        </div>-->
    </div>
</div>
</template>
<script>
import NavBarPage from './NavBarPage.vue';
export default {

    components: {
        NavBarPage
    },
    data() {
        return {

        };
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped>

body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
}

.full-background {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh; /* Prend toute la hauteur de la page */
    padding: 20px; /* Ajoute un peu d'espace autour */
}

.container {
    max-width: 1200px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 15px;
}

h1 {
    font-size: 24px;
    margin: 0;
}

nav a {
    text-decoration: none;
    color: #888;
}

nav span {
    color: #aaa;
}

.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.search-bar input[type="text"] {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.btn-add-client {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table thead {
    background-color: #f7f7f7;
}

table thead th {
    text-align: left;
    padding: 10px;
    font-size: 14px;
    color: #666;
}

table tbody tr {
    border-bottom: 1px solid #eee;
}

table tbody td {
    padding: 10px;
    font-size: 14px;
    color: #333;
}

/*.pagination {
    text-align: center;
    padding: 20px 0;
    font-size: 18px;
    color: #888;
}

.pagination span {
    cursor: pointer;
    padding: 0 10px;
}

.pagination span:hover {
    color: #333;
}*/

</style>