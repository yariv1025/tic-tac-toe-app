export default {

  // Tic Tac Toe App
  swapTurns(state) {
    // console.log(payload['playing']['player'])
    if(state.players[0]['isMyTurn']){
      state.players[0]['isMyTurn'] = false
      state.players[1]['isMyTurn'] = true
    }
    else {
      state.players[0]['isMyTurn'] = true
      state.players[1]['isMyTurn'] = false
    }
  },

  updateScoreBoard(state, payload) {
    if(state.players[0]['player'] === payload['player']){
      state.players[0]['score'] += 1
      state.scoreBoard[0]['xWon'] = state.players[0]['score']
    }
    else if (state.players[1]['player'] === payload['player']){
      state.players[1]['winner'] = true
      state.players[1]['score'] += 1
      state.scoreBoard[0]['oWon'] = state.players[1]['score']
    }
    else {
      state.scoreBoard[0]['tie'] += 1
    }
  },

}
