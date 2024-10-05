<template>
    <div v-if="showModal" class="container">
        <div class="command-interface">
            <i class="fas fa-window-close" @click="closePage" style="font-size: 50px; color: red; position: absolute; top: 10px; right: 10px; cursor: pointer;"></i>
            
            <div class="form-group">
                <div class="date-field">
                    <label for="start-date">Date de début</label>
                    <input type="text" id="start-date" placeholder="jj/mm/aaaa">
                </div>

                <div class="date-field">
                    <label for="end-date">Date de fin</label>
                    <input type="text" id="end-date" placeholder="jj/mm/aaaa">
                </div>
            </div>

            <div class="order-status">
                <button class="status-button active">À traiter <span>0</span></button>
                <button class="status-button">En cours <span>0</span></button>
                <button class="status-button">Terminée <span>0</span></button>
                <button class="status-button">Livrée au client <span>0</span></button>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    props: ['showModal'],
    components: {
        
    },
    data() {
        return {
            
        };
    },
    mounted() {
    },
    methods: {
        closePage() {
    this.$emit('close');
    },
        
    }
};
</script>
<style scoped>
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

body {
    font-family: Arial, sans-serif, 'Monda';
    background-color: rgba(0, 0, 0, 0.1);
    margin: 20px;
    width: 100%;
    height: 100%;
    
}

/*.commande{
    position: absolute;
    top: auto;
    background-color: rgba(0,0,0,0.2);
   left: 30%;
   width: 700px;
}*/

.command-interface {
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 15rem;
  position: relative;
    width: 35%;
}



.form-group {
    display: flex;
    justify-content: space-between; /* Assure que les éléments sont alignés sur une même ligne */
    align-items: flex-start; /* Aligne les labels et inputs en haut */
    gap: 20px; /* Espace entre les deux groupes de champs */
    margin-bottom: 30px;
    margin-left: 20px;
}

.date-field {
    display: flex;
    flex-direction: column; /* Place le label au-dessus de l'input */
    width: 45%; /* Ajuste la largeur pour chaque champ, cela garde les deux sur la même ligne */
}

.form-group label {
    color: #495057;
    margin-bottom: 5px; /* Espace entre le label et l'input */
    font-size: 18px;
}

.form-group input {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 75%; /* S'assure que l'input prenne toute la largeur du container parent */
    font-size: 18px;
}


.order-status {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 80px;
    padding: 10px;
}

.status-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #6c757d;
    position: relative;
    font-size: 16px;
}

.status-button.active {
    color: #5864ed;
    font-weight: bold;
    font-size: 16px;
}

.status-button span {
    background-color: #dee2e6;
    color: white;
    padding: 2px 8px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -14px;
    font-size: 14px;
}

</style>