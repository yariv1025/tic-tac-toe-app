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
    },

    methods: {
      updateCell() {
        this.$emit('click')
      },
    }

  }
</script>

<style>
  .cell {
    width: 100px;
    height: 100px;
    background-color: black;
    border: 1px solid white;
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
