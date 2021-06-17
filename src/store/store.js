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

    scoreBoard: [
      {oWon: '0', xWon: '0', tie: '0'}
    ],

    players:[
      {player: 'x', score: 0, isMyTurn: true},
      {player: 'o', score: 0, isMyTurn: false},
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
