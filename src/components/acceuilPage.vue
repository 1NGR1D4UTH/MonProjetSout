<template>
    <div class="container">
       <NavBarPage/>
        <div class="main">
            <section class="sect1">
                
                <div ><div class="details" style="text-align:right;  margin-top:5px; font-size: 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; ">
                <h3>Nombre de clients</h3>
                <p>3</p>
                <span class="status red">+1 than yesterday </span>
                </div> </div>
                <div class="marg"> <div class="details" style="text-align:right; margin-top:5px; font-size: 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <h3>Nombre de commandes</h3>
                <p>3</p>
                <span class="status red">+1 than yesterday</span>
                </div></div>
                
            </section>
            <section class="sect2">
                <img src="../assets/7.jpg" alt="atelier" />
               
            </section>
            <section class="sect3">
                <div class="d1">
                    <div class="details" style="text-align:right; padding:5px; font-size: 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <h3>Quantité en stock</h3>
                <p>3</p>
                <span class="status red">+1 than yesterday</span>
                </div>
                </div>
                <div class="d2"></div>
            </section>
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
.container {
    width: 100%;
}
.main{
    width: 98%;
    height: 86vh;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 1%;
    background-color: rgba(0, 0, 0, 0.1);
}
.main section{
    width: 26%;
    height: 83vh;
}
.sect1{
    display: block;
    
}
.sect1 div{
    width: 100%;
    /* box-shadow: 0px 0px 10px rgba(0 , 0, 0, 0.3); */
    background-color: white;
    border-radius: 10px;
    height: 40.5vh;
    padding:1.5px;
    
}
.marg{
    margin-top: 2vh;
}
.sect2{
    /* box-shadow: 0px 0px 10px rgba(0 , 0, 0, 0.3); */
    background-color: white;
    border-radius: 10px;
    width: 45%!important;
}
.sect2 img{
    width: 100%;
}
.sect3 .d1{
    height: 18.5vh;
    width: 100%;
    background-color: white;
    /* box-shadow: 0px 0px 10px rgba(0 , 0, 0, 0.3); */
    border-radius: 10px;
}
.sect3 .d2{
    height: 61.5vh;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-top: 2vh;
    /* box-shadow: 0px 0px 10px rgba(0 , 0, 0, 0.3); */
}
.details h3 {
    margin: 0;
    font-size: 1em;
    color: #333;
}

.details p {
    margin: 5px 0;
    font-size: 1.5em;
    color: #333;
}
.status {
    font-size: 0.9em;
}
</style>