import { createApp } from 'vue'

// charts 
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
// routing 
import { createRouter, createWebHistory } from 'vue-router'
// webpages 
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/Profile.vue'
import Swipe from '@/views/Swipe.vue'
import Dashboard from '@/views/DashboardUser.vue'
import Register from '@/views/RegisterUser.vue'
import Test from '@/views/Test.vue'

// database --> firebase 
import { firestorePlugin } from 'vuefire';

// store information site-wide 
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            user : {
                UID : "", 
                count: "bedrijf"
            }
        }
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',            name: 'Home',           component: Home         },
        { path: '/About',       name: 'About',          component: About        },
        { path: '/Profile',     name: 'MakeProfile',    component: Profile      },
        { path: '/Dashboard',   name: 'Dashboard',      component: Dashboard    },
        { path: '/Swipe',       name: 'Swipe',          component: Swipe        },
        { path: '/Register',    name: 'Register',       component: Register     },
        { path: '/Test',    name: 'Test',       component: Test     }

    ]
})


createApp(App)
    .use(router)
    .use(VueApexCharts)
    .use(store)
    .use(firestorePlugin)
    .mount('#app')

