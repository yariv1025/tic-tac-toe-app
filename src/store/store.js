import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({

  //state
  // state: state,
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
      {id: 4, name: 'Sven', registered: false}
    ],

    scoreBoard: [
      {oWon: '0', xWon: '0', tied: '0'}
    ],
    players:[
      {player: 'x', score: 0, winner: false, isMyTurn: true},
      {player: 'o', score: 0, winner: false, isMyTurn: false},
    ],
  },

  // returns the state
  getters: getters,

  // Not allowed to run async code!!! -> instead we can use 'actions'
  mutations: mutations,

  // actions -> for triggering mutation after running some asynchronously code
  // Note: context - almost the same as store
  actions: actions

})
