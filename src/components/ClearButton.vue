<template>
  <div class="container">
    <div class="d-grid gap-2 d-md-block">
      <button type="button"
              class="btn btn-dark "
              @click="clearBoard()">Clear
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "clear-button",

    methods: {

      // Clear the game Board
      clearBoard() {
        this.$emit("clearBoard")
      }
    }
  }
</script>

<style></style>
