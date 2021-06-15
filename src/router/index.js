import Vue from 'vue'
import Router from 'vue-router'
import registration from '@/components/Registration'
import registrations from '@/components/Registrations'
import TicTacToeGame from '@/components/TicTacToeGame'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TicTacToeGame',
      component: TicTacToeGame
    },
    {
      path: '/registration',
      name: 'Registration',
      component: registration
    },
    {
      path: '/registrations',
      name: 'Registrations',
      component: registrations
    },
  ]
})
