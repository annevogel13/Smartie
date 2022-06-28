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
import Test from '@/views/testDB.vue'
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
        { path: '/QuestionnaireB', name: 'QuestionnaireB', component: QuestionnaireB },
        { path: '/QuestionnaireC', name: 'QuestionnaireC', component: QuestionnaireC },
        { path: '/DashboardUser', name: 'Dashboard', component: Dashboard },
        { path: '/Swipe', name: 'Swipe', component: Swipe },
        { path: '/RegisterUser', name: 'Register', component: Register },
        { path: '/TestDB', name: 'Test', component: Test }
    ]
})
/*
CustomModelDownloadConditions conditions = new CustomModelDownloadConditions.Builder()
    .requireWifi()
    .build();
FirebaseModelDownloader.getInstance()
    .getModel("Matching_tool", DownloadType.LOCAL_MODEL, conditions)
    .addOnSuccessListener(new OnSuccessListener<CustomModel>() {
      @Override
      public void onSuccess(CustomModel model) {
        // Download complete. Depending on your app, you could enable
        // the ML feature, or switch from the local model to the remote
        // model, etc.
      }
    }); 
*/



createApp(App)
    .use(router)
    .use(VueApexCharts)
    .use(store)
    .use(firestorePlugin)
    .mount('#app')
