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
import interfaceClient from './components/interfaceClient.vue';
import PasserCommande from './components/PasserCommande.vue';
import SuivreCommande from './components/SuivreCommande.vue';
import CatalogueAdmin from './components/CatalogueAdmin.vue';
import MesuresEnfant from './components/MesuresEnfant.vue';
import MesuresFemme from './components/MesuresFemme.vue';
import MesuresHomme from './components/MesuresHomme.vue';
import AjouterModel from './components/AjouterModel.vue';

// Importer la bibliothèque Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importer les icônes que vous souhaitez utiliser
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleUp,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee,faUser,faChevronCircleDown,faChevronCircleUp,faChevronLeft,faHome);

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
  { path: '/Mesuresclient', component: MesuresClient }, 
  { path: '/interfaceClient', component: interfaceClient },
  { path: '/PasserCommande', component: PasserCommande },
  { path: '/SuivreCommande', component: SuivreCommande },
  { path: '/CatalogueAdmin', component: CatalogueAdmin },
  { path: '/MesuresEnfant', component: MesuresEnfant },
  { path: '/MesuresFemme', component: MesuresFemme },
  { path: '/MesuresHomme', component: MesuresHomme },
  { path: '/AjouterModel', component: AjouterModel }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');

