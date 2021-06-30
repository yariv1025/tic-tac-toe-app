export default {
  name: 'cell',

  props: {
    value: String,
    gameOver: Boolean,
  },

  methods: {
    // Emit event when the cell clicked
    updateCell() {
      this.$emit('click');
    },
  },

  // Watcher - Detects that the game is over and prevents the ability to
  // click on the cells.
  watch: {
    ['gameOver']() {
      // this.value = '';
      this.$emit('cellBlocked');
    }
  }

}
