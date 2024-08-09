<template>

<nav>
            <div class="heath">
                <h1>L<span>ogo</span></h1>
                <h1>Ingrid</h1>
            </div>
            <ul>
                <li style="background-color: rgba(0, 0, 0, 0.1);"><router-link to="/acceuilPage" style="text-decoration: none;"><i class="fa fa-home"></i>Home</router-link></li>
                <li><router-link to="/ClientPage" style="text-decoration: none;"><i class="fa fa-users"></i>Client</router-link></li>
                <li ><router-link to="/CommandePage" style="text-decoration: none;"><i class="fa fa-file"></i>Commande</router-link></li>
                <li class="dropdown"><router-link to="/StockPage" style="text-decoration: none;"><i class="fa fa-folder"></i>Stock</router-link>
                    <div class="dropdown-content">
                        <router-link to="/AjouterProduit" style="text-decoration: none;">Ajouter</router-link>
                        <router-link to="/SupprimerProduit" style="text-decoration: none;">Supprimer</router-link>
                        <router-link to="/ModifierProduit" style="text-decoration: none;">Modifier</router-link>
                    </div>
                </li>
                <li class="dropdown"><router-link to="/EmployePage" style="text-decoration: none;"><i class="fa fa-user"></i>Employe</router-link>
                    <div class="dropdown-content">
                        <router-link to="/AjouterEmploye" style="text-decoration: none;">Ajouter</router-link>
                        <router-link to="/SupprimerEmploye" style="text-decoration: none;">Supprimer</router-link>
                        <router-link to="/ModifierEmploye" style="text-decoration: none;">Modifier</router-link>
                        <router-link to="/Désactiver" style="text-decoration: none;">Désactiver compte </router-link>
                    </div>
                </li>
                <li><router-link to="/ProfilPage" style="text-decoration: none;"><i class="fa fa-cog"></i>Profil</router-link></li>

            </ul>
        </nav> 
</template>
<style>

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
.dropdown {
position: relative;
display: inline-block;
}
.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
}
.dropdown-content a {
color: rgb(2, 34, 72);
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
}
.dropdown-content a:hover {
background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
display: block;
}
</style>