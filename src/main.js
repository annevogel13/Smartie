import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import Swipe from '@/views/Swipe.vue'
import Dashboard from '@/views/Dashboard.vue'
import Register from '@/views/Register.vue'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBz-GuAE6HSTl47j9VM0utLN_HWaYGP83Q",
    authDomain: "smartie-v1.firebaseapp.com",
    projectId: "smartie-v1",
    storageBucket: "smartie-v1.appspot.com",
    messagingSenderId: "719152514019",
    appId: "1:719152514019:web:c6a2e869309966d42a56d6",
    measurementId: "G-4YR0EWFPGV"
    };


const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name : 'Home', component : Home},
        {path : '/About', name : 'About', component : About},
        {path : '/Profile', name : 'MakeProfile', component : Profile},
        {path : '/Dashboard', name : 'Dashboard', component : Dashboard},
        {path : '/Swipe', name : 'Swipe', component : Swipe},
        {path : '/Register', name : 'Register', component : Register }
    ]
})

const app_firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app_firebase);


createApp(App)
.use(router)
.use(VueApexCharts)
.mount('#app')

