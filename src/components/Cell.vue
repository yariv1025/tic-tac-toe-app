/* Creating a cell
The cell emits an event if it's clicked and
*/ gets a value just if it's clear.
<template>
  <div class="cell" @click=updateCell>
    <span v-if="value !== ''">{{ value }}</span>
  </div>
</template>

<script>
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
</script>

<style>
  .cell {
    width: 100px;
    height: 100px;
    background-color: black;
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #4AADC1;
    border-radius: 20px 20px 20px 20px;
  }
</style>
