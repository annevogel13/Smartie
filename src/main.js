import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import Swipe from '@/views/Swipe.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name : 'Home', component : Home},
        {path : '/About', name : 'About', component : About},
        {path : '/Profile', name : 'MakeProfile', component : Profile},
        {path : '/Dashboard', name : 'Dashboard', component : Dashboard},
        {path : '/Swipe', name : 'Swipe', component : Swipe},
    ]
})

createApp(App)
.use(router)
.use(VueApexCharts)
.mount('#app')

