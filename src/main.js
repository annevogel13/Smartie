import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name : 'Home', component : Home},
        {path : '/About', name : 'About', component : About},
        {path : '/Profile', name : 'MakeProfile', component : Profile},
    ]
})

createApp(App)
.use(router)
.mount('#app')

