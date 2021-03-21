require('./bootstrap');

import VueRouter from 'vue-router';
import Connexionpolice from './components/Connexionpolice.vue';
import Connexioncitoyen from './components/Connexioncitoyen.vue';
import Menu from './components/Menu.vue'
import Choixidentification from './components/Choixidentification.vue';
import Footer from './components/Footer.vue';


import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

window.Vue = require('vue');
Vue.use(VueRouter);

Vue.component('menu-component', Menu);
Vue.component('footer-component', Footer);

const routes = [
    {
        path:'/connexionpolice',
        component: Connexionpolice
    },
    {
        path:'/connexioncitoyen',
        component: Connexioncitoyen
    },
    {
        path:'/',
        component: Choixidentification
    },
    
]


const router = new VueRouter({
    mode: 'history',
    routes
    
});


 
const app = new Vue({
 el: '#app',
 router: router
});


