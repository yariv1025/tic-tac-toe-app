export default {

  /*Switching between players*/
  swapTurns(state) {
    if(state.players[0]['isXTurn']){
      state.players[0]['isXTurn'] = false
      state.players[0]['isOTurn'] = true
    }
    else {
      state.players[0]['isXTurn'] = true
      state.players[0]['isOTurn'] = false
    }

  },

  /*Updating the score board*/
  updateScoreBoard(state, payload) {
    if(state.players[0]['playerX'] === payload['player']) {
      state.players[0]['isXWin'] = true
      state.players[0]['isOWin'] = false
      state.players[0]['scoreX'] += 1
      state.scoreBoard[0]['xWon'] += 1
    }
    else if (state.players[0]['playerO'] === payload['player']) {
      state.players[0]['isOWin'] = true
      state.players[0]['isXWin'] = false
      state.players[0]['scoreO'] += 1
      state.scoreBoard[0]['oWon'] += 1
    }
    else {
      state.players[0]['tie'] += 1
      state.scoreBoard[0]['tie'] += 1
    }
  },

  /*Reset all variables that indicate a win*/
  resetWinnerStatus(state, payload) {

    if(state.players[0]['playerX'] === payload['playing']) {
      state.players[0]['isXWin'] = false
      state.scoreBoard[0]['previousGameWinner'] = state.players[0]['playerX']
    }
    else if (state.players[0]['playerO'] === payload['playing']){
        state.players[0]['isOWin'] = false
        state.scoreBoard[0]['previousGameWinner'] = state.players[0]['playerO']
      }
    else {
          state.players[0]['tie'] = 0
          state.scoreBoard[0]['previousGameWinner'] = 'Tied'
    }

    state.scoreBoard[0]['wasPrevGame'] = true
  }

}
