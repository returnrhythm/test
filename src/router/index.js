// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import First from '../views/First/index.vue'
import Person from '../views/Person/index.vue'
import Data from '../views/Data/index.vue'
import Data_GPA from '../views/GPA/index.vue'
import Data_TchStu from '../views/TchStu/index.vue'
import Data_Workrate from '../views/Workrate/index.vue'
import Data_Workplace from '../views/Workplace/index.vue'
import Default from '../views/SecondRouterDefault/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/',
        component: Home,
        children:[
            {
                path:'',
                component:First
            },
            {
                path:'person',
                component:Person
            },
            {
                path:'data',
                component:Data,
                children:[
                    {
                        path:'data_GPA',
                        component:Data_GPA
                    },
                    {
                        path:'data_tchstu',
                        component:Data_TchStu
                    },
                    {
                        path:'data_workrate',
                        component:Data_Workrate
                    },
                    {
                        path:'data_workplace',
                        component:Data_Workplace
                    },
                    {
                        path:'',
                        component:Default
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        component: Login 
    },
    
  ]
})
 
export default router