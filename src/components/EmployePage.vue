<template>
    <NavBarPage/>
    <div class="container">
        <div class="header">
            <h2>EMPLOYE</h2>
            <div class="breadcrumb">
                <a href="#">Employe</a> / <a href="#">Liste</a>
            </div>
        </div>
        <div class="table-container">
            <div v-if="ajout" class="ajouter">
                <i class="fas fa-window-close" @click="closePage" style="font-size: 20px; color: red;"></i>
                <AjouterEmploye/>
            </div>
            <button id="addEmployeBtn" class="add-btn" @click="redirectToAjouterEmploye">+ Ajouter un employe</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date de naissance</th>
                        <th>Lieu de naissance</th>
                        <th>Sexe</th>
                        <th>Téléphone</th>
                        <th>Email</th>
                        <th>Localisation</th>
                        <th>Type d'utilisateur</th>
                        
                    </tr>
                </thead>
                <tbody id="employeTableBody">
                    <tr v-for="user in employe" :key="user.id">
                        <td>{{ user.nom }}</td>
                        <td>{{ user.prénom }}</td>
                        <td>{{ new Date(user.date_naissance )}}</td>
                        <td>{{ user.lieu_de_naissance }}</td>
                        <td>{{ user.sexe }}</td>
                        <td>{{ user.téléphone }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.localisation }}</td>
                        <td>{{ user.type_utilisateur }}</td>
                        <td> 
                            <button class="edit-btn" @click="showEditModal (user)">Modifier</button>
                            <button class="delete-btn" @click="deleteModal (user.email)">Supprimer</button> 
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        


    </div>
</template>
<script>
import AjouterEmploye from './AjouterEmploye.vue';
import NavBarPage from './NavBarPage.vue';
import axios from 'axios'; 
export default {
    components: {
        NavBarPage,
        AjouterEmploye
    },
    data() {
        return {
            ajout: false,
            employe: [],
            selectedUser: null, // Ajoutez cette ligne pour stocker l'utilisateur sélectionné
        };
    },
    mounted() {
        this.getTypefs();
    },
    methods: {
        closePage(){
            this.ajout = false
        },
        redirectToAjouterEmploye () {
            this.ajout = true;
        },
        

    async deleteUser(email) {
        try {
            await axios.delete(`http://localhost:3000/users/${email}`);
            this.getTypefs(); // Rafraîchir la liste des employés
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        }
    },

        async getTypefs() {
            try {
                const response = await axios.get('http://localhost:3000/user'); // Appeler l'API GET
                this.employe = response.data;
                console.log(this.employe);
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            }
        }
    }
};
</script>



<style>

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.ajouter{
    position: absolute;
    top: auto;
    background-color: rgba(0,0,0,0.2);
   left: 30%;
   width: 700px;
}
.container {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header h2 {
    margin: 0;
}

.breadcrumb a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.table-container {
    margin-top: 20px;
}

.add-btn {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-bottom: 10px;
}

.add-btn:hover {
    background-color: #218838;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}



</style>