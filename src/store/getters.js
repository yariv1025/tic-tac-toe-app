export default {

  /*Return scores*/
  scores(state){
    // TODO: get the score of the previous games from mongoDB
    return state.scoreBoard
  },

  /*Return players*/
  players(state) {
    return state.players
  },

  /*Return the current player*/
  currentPlayer(state) {
    return state.players[0]['isXTurn'] ? state.players[0]['playerX'] : state.players[0]['playerO']
    },

  /*Return the current winner*/
  winnerIs(state){
    return state.players[0]['isXWin'] ? state.players[0]['playerX'] : state.players[0]['playerO']
  },

}
