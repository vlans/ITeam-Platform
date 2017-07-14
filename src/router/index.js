import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Student from '@/components/student'
import StudentList from '@/components/student/src/list'

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
      redirect: 'student/list',
      component: Student,
      children: [
        {
          path: '/student/list',
          component: StudentList
        }
      ]
    }
  ]
})
