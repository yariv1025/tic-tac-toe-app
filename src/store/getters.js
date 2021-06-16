export default {

  // Tic Tac Toe App
  scores(state){
    // TODO: get the score of the previous games from mongoDB
    return state.scoreBoard
  },

  players(state) {
    return state.players
  },

  currentPlayer(state) {
    return state.players[0]['isMyTurn'] ? state.players[0] : state.players[1]
    },

  winnerIs(state){
    return state.players[0]['winner'] ? state.players[0] : state.players[1]
  },

}
