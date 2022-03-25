const app = createApp(App);
import { createApp } from 'vue'
import App from './App.vue'

//============== bootstrap ==============
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

//==========fontAwesome ===============

// ==============  Routeing Imports  ==============
import { createRouter, createWebHistory } from 'vue-router'
import HomePageComponent from './components/Pages/Home/homePage.vue'
import detailsPageComponent from './components/Pages/details/detailsPage.vue'
import AllHomeComponents from './components/Pages/Home/AllHomeComponents.vue'
import NotFoundComponent from './components/Pages/Home/notFoundComponent.vue' 
import axios from 'axios'
const routes = [
    {
        path: '',
        component: AllHomeComponents
    },
    {
        path: '/',
        component: AllHomeComponents
    },
    {
        path: '/:id',
        component: detailsPageComponent
            
    },
    ,
    {
        path: '/:NotFound(.*)*',
        component: NotFoundComponent,
        name: 'error'
            
    },

   
   

    
    // {
    //     path: '/:Notfound(.*)*',
    //     component: notFoundComponent
    // },
   
   

]

axios.defaults.baseURL="http://localhost:2000/"
const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)



app.mount('#app')
