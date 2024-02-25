// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import First from '../views/First/index.vue'
import Person from '../views/Person/index.vue'
import Data from '../views/Data/index.vue'
import User from '../views/Person/user/user.vue'
import myHomework from '../views/Person/user/userpages/myHomework.vue'
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
                component:Person,
                children:[{
                         path:'login',
                         component:Login
                          },
                          {
                        path:'user',
                        component:User,
                        children:[{
                                  path:'myHomework',
                                  component:myHomework
                                  }
                        ]
                          } 
            ]
            },
            {
                path:'data',
                component:Data
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