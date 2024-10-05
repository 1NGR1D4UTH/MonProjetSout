<template>
    <NavBarPage/>
    <div class="container">
        <header>
            <h1>Mesures Client</h1>
        </header>

        <form @submit.prevent="saveMeasurements">

            <!-- Section Haut -->
            <div class="form-section">
                <h2>Haut</h2>
                <table class="mesure-table">
                    <thead>
                        <tr>
                            <th>Mesure</th>
                            <th>Valeur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(measure, index) in hautMesures" :key="'haut-' + index">
                            <td>{{ measure.name }}</td>
                            <td><input type="text" v-model="measure.value" ></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Section Bas -->
            <div class="form-section">
                <h2>Bas</h2>
                <table class="mesure-table">
                    <thead>
                        <tr>
                            <th>Mesure</th>
                            <th>Valeur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(measure, index) in basMesures" :key="'bas-' + index">
                            <td>{{ measure.name }}</td>
                            <td><input type="text" v-model="measure.value" ></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="form-action">
                <button type="submit" class="btn-suivant">Enregistrer</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id_client: '',
            create_by: '',
            hautMesures: [
                { name: 'Epaule', value: '' },
                { name: 'Dos', value: '' },
                { name: 'Poitrine', value: '' },
                { name: 'Carrure dos', value: '' },
                { name: 'Carrure avant', value: '' },
                { name: 'Ventre', value: '' },
                { name: 'Taille', value: '' },
                { name: 'L.manche', value: '' },
                { name: 'L.poignet', value: '' },
                { name: 'col', value: '' }
            ],
            basMesures: [
                { name: 'L.taille', value: '' },
                { name: 'L.totale', value: '' },
                { name: 'Bassin', value: '' },
                { name: 'Nombre de poche', value: '' },
                { name: 'Fesses', value: '' },
                { name: 'Cuisse', value: '' },
                { name: 'Longueur', value: '' },
                { name: 'Fond', value: '' },
                { name: 'Braquette', value: '' },
                { name: 'Pied', value: '' }
            ],
        };
    },
    methods: {
        async saveMeasurements() {
            const id_client = 'client-id'; // Remplacez par l'ID réel du client

            try {
                const response = await axios.post('http://localhost:3000/saveMeasurements', {
                    id_client: id_client, // Envoyer l'identifiant du client
                    measurements: [...this.hautMesures, ...this.basMesures] // Envoi des mesures au backend
                });
                console.log(response.data.message);
            } catch (error) {
                console.error('Erreur lors de l\'enregistrement des mesures:', error);
            }
        }
    }
}
</script>


<style scoped>

body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
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


.form-section {
    margin-top: 20px;
}

.form-section h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.form-section + .form-section {
    margin-top: 40px;
}

.mesure-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.mesure-table th, .mesure-table td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
}

.mesure-table th {
    background-color: #f2f2f2;
}

.mesure-table td input {
    width: 90%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /*font-size: 16px;*/
    
}

.form-action {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn-precedent, .btn-suivant {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
}

.btn-precedent {
    background-color: #6c757d;
}


</style>