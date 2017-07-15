import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Student from '@/components/student/home'
import Open from '@/components/open/home'
import Courseware from '@/components/courseware/home'
import Material from '@/components/material/home'
import Tools from '@/components/tools/home'
import Wiki from '@/components/student-area/src/wiki/home'
import Share from '@/components/student-area/src/share/home'
import UserCenter from '@/components/user/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'student',
      component: Home
    },
    {
      path: '/student',
      component: Student
    },
    {
      path: '/open',
      component: Open
    },
    {
      path: '/courseware',
      component: Courseware
    },
    {
      path: '/material',
      component: Material
    },
    {
      path: '/tools',
      component: Tools
    },
    {
      path: '/student-wiki',
      component: Wiki
    },
    {
      path: '/share',
      component: Share
    },
    {
      path: '/center',
      component: UserCenter
    }
  ]
})
