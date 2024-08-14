<template>
    <NavBarPage/>
    <div class="command-interface">
    <div class="header-buttons">
        <button class="new-command">+ Ajouter une commande</button>
        <button class="all-commands">Toutes les commandes</button>
    </div>
    <!--<div class="tabs">
        <button class="tab active">Recherche par critères</button>
        <button class="tab">Rechercher une commande</button>
    </div>-->
    <div class="search-criteria">
        <div class="form-group">
            <label for="client">Client</label>
            <select id="client">
                <option value="">Sélectionner un client</option>
                <!-- Ajouter des options ici -->
            </select>
        </div>
        <div class="form-group">
            <label for="start-date">Date de début</label>
            <input type="text" id="start-date" placeholder="jj/mm/aaaa">
        </div>
        <div class="form-group">
            <label for="end-date">Date de fin</label>
            <input type="text" id="end-date" placeholder="jj/mm/aaaa">
        </div>
        <button class="search-button">Rechercher</button>
    </div>
    <div class="order-status">
        <button class="status-button active">À traiter <span>0</span></button>
        <button class="status-button">En couture <span>0</span></button>
        <button class="status-button">Livrées au client <span>0</span></button>
    </div>
    <div class="no-order">
        Aucune commande
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
    font-family: Arial, sans-serif, 'Monda';
    background-color: rgba(0, 0, 0, 0.1);
    margin: 20px;
    width: 100%;
    height: 100%;
}

.command-interface {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 15rem;
}

.header-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.new-command {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.all-commands {
    background-color: #5864ed;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

/*.tabs {
    display: flex;
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 20px;
}*/

.tab {
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.tab.active {
    border-bottom: 2px solid #5864ed;
    color: #5864ed;
}

.search-criteria {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 5px;
    color: #495057;
}

.form-group input, .form-group select {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 200px;
}

.search-button {
    background-color: #5864ed;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.order-status {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.status-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #6c757d;
    position: relative;
}

.status-button.active {
    color: #5864ed;
    font-weight: bold;
}

.status-button span {
    background-color: #dee2e6;
    color: white;
    padding: 2px 8px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -10px;
    font-size: 12px;
}

.no-order {
    color: #6c757d;
    text-align: center;
    margin-top: 20px;
}
</style>