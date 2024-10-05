<template>
    <NavBarPage />
    <div class="full-background">
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
                    <AjouterEmploye />
                </div>
                <button id="addEmployeBtn" class="add-btn" @click="redirectToAjouterEmploye">+ Ajouter un
                    employe</button>

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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="employeTableBody">
                        <tr v-for="user in employe" :key="user.id">
                            <td>{{ user.nom }}</td>
                            <td>{{ user.prénom }}</td>
                            <td>{{ new Date(user.date_naissance) }}</td>
                            <td>{{ user.lieu_de_naissance }}</td>
                            <td>{{ user.sexe }}</td>
                            <td>{{ user.téléphone }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.localisation }}</td>
                            <td>{{ user.type_utilisateur }}</td>
                            <td>

                                <i class="fas fa-edit" @click="showEditModal(user)"
                                    style="cursor: pointer; color: blue; margin-right: 10px;" title="Modifier"></i>
                                <i class="fas fa-trash" @click="deleteModal(user.email)"
                                    style="cursor: pointer; color: red;" title="Supprimer"></i>
                            </td>

                        </tr>
                    </tbody>
                </table>

                <!-- Modal pour la modification -->
                <div v-if="isEditModalVisible" class="modal">
                    <form @submit.prevent="editUser">
                        <h3>Modifier l'employé</h3>
                        <input v-model="selectedUser.nom" placeholder="Nom" required />
                        <input v-model="selectedUser.prénom" placeholder="Prénom" required />
                        <input v-model="selectedUser.date_naissance" type="date" required />
                        <input v-model="selectedUser.lieu_de_naissance" placeholder="Lieu de naissance" required />
                        <input v-model="selectedUser.sexe" placeholder="Sexe" required />
                        <input v-model="selectedUser.téléphone" placeholder="Téléphone" required />
                        <input v-model="selectedUser.email" type="email" placeholder="Email" required />
                        <input v-model="selectedUser.localisation" placeholder="Localisation" required />
                        <input v-model="selectedUser.type_utilisateur" placeholder="Type d'utilisateur" required />
                        <button type="submit">Mettre à jour</button>
                        <button type="button" @click="isEditModalVisible = false">Annuler</button>
                    </form>
                </div>

            </div>

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
            isEditModalVisible: false, // Gérer la visibilité du modal
        };
    },
    mounted() {
        this.getTypefs();
    },
    methods: {
        closePage() {
            this.ajout = false
        },
        redirectToAjouterEmploye() {
            this.ajout = true;
        },

        async deleteModal(email) {
            const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cet(te) employé(e) ?");
            if (confirmDelete) {
                await this.deleteUser(email);
            }
        },

        async deleteUser(email) {
            try {
                await axios.delete(`http://localhost:3000/users/${email}`);
                this.getTypefs(); // Rafraîchir la liste des employés
            } catch (error) {
                console.error('Erreur lors de la suppression de l\'employé:', error);
            }
        },


        async showEditModal(user) {
            this.selectedUser = { ...user }; // Créer une copie de l'utilisateur sélectionné
            // Logique pour afficher le modal d'édition
            this.isEditModalVisible = true;
        },

        async editUser() {
            try {
                await axios.put(`http://localhost:3000/users/${this.selectedUser.email}`, this.selectedUser);
                this.getTypefs(); // Rafraîchir la liste des employés
                this.isEditModalVisible = false; // Fermer le modal après la mise à jour
                console.log('Utilisateur mis à jour:', this.selectedUser); // Utiliser la réponse ici
            } catch (error) {
                console.error('Erreur lors de la mise à jour de l\'employé(e):', error);
            }
        },

        async getTypefs() {
            try {
                const response = await axios.get('http://localhost:3000/user'); // Appeler l'API GET
                this.employe = response.data;
                console.log(this.employe);
            } catch (error) {
                console.error('Erreur lors de la récupération des employé(e)s :', error);
            }
        }
    }

}

</script>



<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}

.full-background {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100vh;
    /* Prend toute la hauteur de la page */
    padding: 20px;
    /* Ajoute un peu d'espace autour */
}

.ajouter {
    position: absolute;
    top: auto;
    background-color: rgba(0, 0, 0, 0.2);
    left: 30%;
    width: 700px;
}

.fa-edit,
.fa-trash {
    font-size: 20px;
    /* Ajustez la taille si nécessaire */

}

.container {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    text-decoration: none;
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

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal form {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>