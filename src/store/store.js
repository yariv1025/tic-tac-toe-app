import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({

  //store state
  // state: state,
  state: {
    players: [{
      Tie: 0,
      isTie: false,
      playerX: 'X',
      scoreX: 0,
      xWon: 0,
      isXTurn: true,
      isXWin: false,
      playerO: 'O',
      scoreO: 0,
      oWon: 0,
      isOTurn: false,
      isOWin: false,
      wasPrevGame: null,
    }],

    scoreBoard: [
      {oWon: 0, xWon: 0, tie: 0, previousGameWinner: null , wasPrevGame: false}
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
