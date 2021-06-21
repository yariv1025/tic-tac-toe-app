<template>
  <div class="container">

    <button type="button"
            class="myButton"
            :style
            @click="clearBoard()">Clear
    </button>

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

<style>
.container {
  flex-wrap: wrap;
  display: grid;
  padding: 20px;
  justify-content: center;
  align-content: center;
}

.myButton {
  color: rgb(0, 0, 0);
  font-size: 21px;
  line-height: 21px;
  padding: 11px;
  border-radius: 10px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(to right, rgb(28, 110, 164) 0%, rgb(35, 136, 203) 50%, rgb(20, 78, 117) 100%);
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px solid rgb(28, 110, 164);
  display: inline-block;
}

.myButton:hover {
  background: #1C6EA4;
}

.myButton:active {
  background: #144E75;
}

</style>
