export default {

  // // Other App
  // // register a user
  // register(state, payload) {
  //   const date = new Date;
  //   const user = state.users.find(user => {
  //     return user.id === payload.userId
  //   });
  //   user.registered = true;
  //   const registration = {
  //     userId: user.id,
  //     name: user.name,
  //     date: date.getMonth() + '/' + date.getDay()
  //   };
  //   state.registrations.push(registration)
  // },
  //
  // // unregister a user
  // unregister(state, payload) {
  //   const user = state.users.find(user => {
  //     return user.id === payload.userId;
  //   });
  //   user.registered = false;
  //   const registration = state.registrations.find(registration => {
  //     return registration.userId = payload.userId;
  //   });
  //   state.registrations.splice(state.registrations.indexOf(registration), 1);
  // },

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

  updateWinnerAndScore(state, payload) {
    if(state.players[0]['player'] === payload['player']['player']){
      state.players[0]['winner'] = true
      state.players[0]['score'] += 1

    }
    else {
      state.players[1]['winner'] = true
      state.players[1]['score'] += 1

    }
  },

}
