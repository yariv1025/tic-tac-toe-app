import Vue from 'vue'
import Router from 'vue-router'
import TicTacToeGame from '@/components/TicTacToeGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TicTacToeGame',
      component: TicTacToeGame
    },
  ]
})
