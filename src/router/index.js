// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import First from '../views/First/index.vue'
import Person from '../views/Person/index.vue'
import Data from '../views/Data/index.vue'
import User from '../views/Person/user/user.vue'
import myHomework from '../views/Person/user/myHomework.vue'
import DataStuMsg from '../views/StuMsg/index.vue'
import DataStuGPA from '../views/StuData/components/StuGPA.vue'
import DataStuQuality from '../views/StuData/components/StuQuality.vue'
import DataGPATrend from '../views/StuData/components/GPATrend.vue'
import DataGPA from '../views/GPA/index.vue'
import DataGPACourse from '../views/GPA/components/course.vue'
import DataGPAMajor from '../views/GPA/components/major.vue'
import DataGPAMethod from '../views/GPA/components/method.vue'
import DataTchStu from '../views/TchStu/index.vue'
import DataWorkrate from '../views/Workrate/index.vue'
import DataWorkplace from '../views/Workplace/index.vue'
import Default from '../views/SecondRouterDefault/index.vue'
import userManagement from '../views/Person/user/userManagement.vue'
import userPage from '../views/Person/user/userPage.vue'
import roleManage from '../views/Person/user/roleManage.vue'
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
                         path:'',
                         component:User
                         },
                         {
                         path:'login',
                         component:Login
                          },
                          {
                        path:'user',
                        component:User,
                        children:[{
                                   path:'',
                                   component:userPage
                                  },
                                  {
                                  path:'myHomework',
                                  component:myHomework
                                  },
                                  {
                                  path:'userManagement',
                                  component:userManagement
                                  },
                                  {
                                    path:'userPage',
                                    component:userPage
                                  },
                                  {
                                    path:'rolePage',
                                    component:roleManage
                                  }
                        ]
                          } 
            ]
            },
            {
                path:'data',
                component:Data,
                children:[
                    {
                        path:'GPA',
                        component:DataGPA,
                        children:[
                        {
                            path:'',
                            component:DataGPACourse
                        },
                        {
                            path:'course',
                            component:DataGPACourse
                        },
                        {
                            path:'method',
                            component:DataGPAMethod
                        },
                        {
                            path:'major',
                            component:DataGPAMajor
                        }]
                    },
                    {
                        path:'stuGPA',
                        component:DataStuGPA
                    },
                    {
                        path:'GPAtrend',
                        component:DataGPATrend
                    },
                    {
                        path:'stuquality',
                        component:DataStuQuality
                    },
                    {
                        path:'stumsg',
                        component:DataStuMsg
                    },
                    {
                        path:'tchstu',
                        component:DataTchStu
                    },
                    {
                        path:'workrate',
                        component:DataWorkrate
                    },
                    {
                        path:'workplace',
                        component:DataWorkplace
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