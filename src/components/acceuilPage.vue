<template>
    <div class="container">
        <nav>
            <div class="heath">
                <h1>L<span>ogo</span></h1>
                <h1>Ingrid</h1>
            </div>
            <ul>
                <li style="background-color: rgba(0, 0, 0, 0.1);"><i class="fa fa-home"></i>Home</li>
                <li><i class="fa fa-users"></i>Clients</li>
                <li><i class="fa fa-file"></i>Commande</li>
                <li><i class="fa fa-folder"></i>Stock</li>
                <li><i class="fa fa-user"></i>Employe</li>
                <li><i class="fa fa-cog"></i>Profile</li>

            </ul>
        </nav>
        <div class="main">
            <section class="sect1">
                <div> </div>
                <div class="marg"></div>
            </section>
            <section class="sect2"></section>
            <section class="sect3">
                <div class="d1"></div>
                <div class="d2"></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {

    components: {
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

nav {
    width: 100%;
    display: block;
    margin: auto;
    padding: 0;
}
.heath{
    display: flex;
    justify-content: space-between;
    background-color: rgb(2, 34, 72);
    width: 96%;
    padding: 0 2%;

}
.heath h1{
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
h1 span{
    color: orangered;
}
nav ul {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    padding: 15px 0;
}

nav ul li {
    width: 19%;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
    margin: auto;
    padding: 6px 0;
    margin: 0;
    transition: all 0.3s;
    border-radius: 10px;

}
li:hover{
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
nav ul li i{
   padding-right: 15px;
   color: rgb(2, 34, 72);
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
</style>