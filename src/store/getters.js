export default {

  unregisteredUsers(state) {
    return state.users.filter(user => {
      return !user.registered;
    });
  },
  registrations(state) {
    return state.registrations;
  },
  totalRegistrations(state) {
    return state.registrations.length;
  },

  //Tic Tac Toe Game
  getScore(){
    //TODO: get the score of the previous games from mongoDB
  }

}
