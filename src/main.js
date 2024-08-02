import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from '@/components/CreateAccount.vue';
import AuthentificationPage from '@/components/AuthentificationForm.vue';
import acceuilPage from './components/acceuilPage.vue';


const routes = [
  { path: '/CreateAccount', component: CreateAccount },
  { path: '/', component: AuthentificationPage },
  { path: '/acceuilPage', component: acceuilPage },
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

