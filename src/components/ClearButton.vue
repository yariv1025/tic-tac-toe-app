<template>
  <div class="container">
    <div class="d-grid gap-2 d-md-block">
      <button type="button" class="btn btn-dark "  @click="clearBoard()">Clear
      </button>
      <button type="button" class="btn btn-dark ">Dark
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClearButton",

    methods: {

      clearBoard() {// TODO: Clear the score Board}
        this.$emit("clearBoard");
      }
    }
  }
</script>

<style>

</style>
