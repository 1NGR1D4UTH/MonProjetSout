import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from '@/components/CreateAccount.vue';
import AuthentificationPage from '@/components/AuthentificationForm.vue';
import acceuilPage from './components/acceuilPage.vue';
import ClientPage from './components/ClientPage.vue';
import CommandePage from './components/CommandePage.vue';
import StockPage from './components/StockPage.vue';
import EmployePage from './components/EmployePage.vue';
import ProfilPage from './components/ProfilPage.vue';
import AjouterEmploye from './components/AjouterEmploye.vue';
import AjouterClient from './components/AjouterClient.vue';
import AjouterCommande from './components/AjouterCommande.vue';
import ModifierEmploye from './components/ModifierEmploye.vue';
import MesuresClient from './components/MesuresClient.vue';


const routes = [
  { path: '/CreateAccount', component: CreateAccount },
  { path: '/', component: AuthentificationPage },
  { path: '/acceuilPage', component: acceuilPage },
  { path: '/ClientPage', component: ClientPage },
  { path: '/CommandePage', component: CommandePage },
  { path: '/StockPage', component: StockPage},
  { path: '/EmployePage', component: EmployePage },
  { path: '/ProfilPage', component: ProfilPage },
  { path: '/AjouterEmploye', component: AjouterEmploye },
  { path: '/AjouterClient', component: AjouterClient },
  { path: '/AjouterCommande', component: AjouterCommande },
  { path: '/ModifierEmploye', component: ModifierEmploye },
  { path: '/Mesuresclient', component: MesuresClient } 
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

