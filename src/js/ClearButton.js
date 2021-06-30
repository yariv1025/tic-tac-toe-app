export default {
  name: "clear-button",

  methods: {
    // Emit event for game Board clearing
    clearBoard() {
      this.$emit("clearBoard")
    }
  }
}
