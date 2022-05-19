import {createRouter, createWebHistory} from 'vue-router'

import Home from '@components/HomePage.vue'
import MakeProfile from '@components/MakeProfile.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/MakeProfile', name: 'Makeprofile', component: MakeProfile}
]