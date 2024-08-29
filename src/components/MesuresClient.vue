<template>
    <NavBarPage/>
    <div class="container">
        <div class="header">
            <h2>MESURES</h2>
            <!--<div class="breadcrumb">
                <a href="#">Employe</a> / <a href="#">Liste</a>
            </div> -->
        </div>
        <div class="table-container">
            
           <!-- <button id="addEmployeBtn" class="add-btn">+ Ajouter un employe</button>-->
            
            <table>
                <thead>
                    <tr>
                        <th>Epaule</th>
                        <th>Dos</th>
                        <th>Poitrine</th>
                        <th>Hauteur sein</th>
                        <th>Tour sein</th>
                        <th>Carrure dos</th>
                        <th>Carrure avant</th>
                        <th>Ventre</th>
                        <th>Taille</th>
                        <th>L.taille</th>
                        <th>L.totale</th>
                        <th>Bassin</th>
                        <th>L.manche</th>
                        <th>L.poignet</th>
                        <th>Col</th>
                        <th>Nomnbre de poche</th>
                        <th>Fesses</th>
                        <th>Cuisse</th>
                        <th>Longueur</th>
                        <th>Fond</th>
                        <th>Braquette</th>
                        <th>Pied</th>
                        
                    </tr> 
                </thead>
                <tbody id="mesureTableBody">
                    <tr v-for="client in mesure" :key="client.id">
                        <td>{{ client.epaule }}</td>
                        <td>{{ client.dos }}</td>
                        <td>{{ client.poitrine }}</td>
                        <td>{{ client.hauteur_sein }}</td>
                        <td>{{ client.tour_sein}}</td>
                        <td>{{ client.carrure_dos }}</td>
                        <td>{{ client.carrure_avant }}</td>
                        <td>{{ client.ventre }}</td>
                        <td>{{ client.taille }}</td>
                        <td>{{ client.l.taille }}</td>
                        <td>{{ client.l.totale }}</td>
                        <td>{{ client.Bassin }}</td>
                        <td>{{ client.l.manche }}</td>
                        <td>{{ client.l.poignet }}</td>
                        <td>{{ client.col }}</td>
                        <td>{{ client.nbre_poche }}</td>
                        <td>{{ client.fesses }}</td>
                        <td>{{ client.cuisse }}</td>
                        <td>{{ client.longueur }}</td>
                        <td>{{ client.fond }}</td>
                        <td>{{ client.braquette }}</td>
                        <td>{{ client.pied }}</td>
                        
                        
                    </tr>
                </tbody>
            </table>
        </div>
        


    </div>
</template>

<script>
export default {
    components: {
        
    },
    data() {
        return {
            
            mesure: [],
             };
    },
    mounted() {
        
    },
    methods: {
        
    
        }
    }

</script>


<style>

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
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