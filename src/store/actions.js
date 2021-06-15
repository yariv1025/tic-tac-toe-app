export default {

  // action for registration mutation
  register(context, userId) {
    // here we can run async code - just for example:
    context.commit('register', userId);
  }

}
