import { createApp } from 'vue'
import App from './App.vue'
// charts 
import VueApexCharts from "vue3-apexcharts";
// routing 
import { createRouter, createWebHistory } from 'vue-router'
// webpages 
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Profile from '@/views/ProfileUser.vue'
import Swipe from '@/views/Swipe.vue'
import Dashboard from '@/views/DashboardUser.vue'
import Register from '@/views/RegisterUser.vue'

import Presentatie from '@/views/Presentatie.vue'
import StageRapport from '@/views/StageRapport.vue'
import QuestionnaireB from '@/components/Questionnaire/FormCompany.vue'
import QuestionnaireC from '@/components/Questionnaire/FormCursist.vue'
// database --> firebase 
import { firestorePlugin } from 'vuefire';
// store information site-wide 
import store from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/About', name: 'About', component: About },
        { path: '/ProfileUser', name: 'MakeProfile', component: Profile },
        { path: '/StageRapport', name: 'StageRapport', component: StageRapport},
        { path: '/Presentatie', name: 'Presentatie', component: Presentatie },
        { path: '/QuestionnaireB', name: 'QuestionnaireB', component: QuestionnaireB },
        { path: '/QuestionnaireC', name: 'QuestionnaireC', component: QuestionnaireC },
        { path: '/DashboardUser', name: 'Dashboard', component: Dashboard },
        { path: '/Swipe', name: 'Swipe', component: Swipe },
        { path: '/RegisterUser', name: 'Register', component: Register },
    ]
})

// Neural network 
const model = tf.loadLayersModel('/finalModel29/model.json')
// was eer await bij 
export function prediction_model(k1, k2, k3, k4, k5, s1, s2, d4) {

    const logg = model.predict(tf.tensor([k1, k2, k3, k4, k5, s1, s2, d4]).expandDims())
    const result = Math.round(logg.dataSync()[0])
    console.log("Prediction : ",  result)

    return result 

}

// Alles mounten 
createApp(App)
    .use(router)
    .use(VueApexCharts)
    .use(store)
    .use(firestorePlugin)
    .mount('#app')
