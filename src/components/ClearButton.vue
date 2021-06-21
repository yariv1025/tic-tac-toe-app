<template>
  <div class="container">

    <button type="button"
            class="btn btn-dark "
            @click="clearBoard()">Clear
    </button>

  </div>
</template>

<script>
  export default {
    name: "clear-button",

    methods: {
      // Emit event for game Board clearing
      clearBoard() {
        this.$emit("clearBoard")
      }
    }
  }
</script>

<style>
  .container {
    flex-wrap: wrap;
    display: grid;
    justify-content: center;
    align-content: center;
  }
</style>
