<template>
  <div class="game">
    <ScoreBoard></ScoreBoard>
    <tic-tac-toe-board :reset="reset"
                       @boardRested="boardRested()"></tic-tac-toe-board>
    <ClearButton @clearBoard="resetBoard()"></ClearButton>
  </div>
</template>

<script>
  import TicTacToeBoard from "./TicTacToeBoard"
  import ClearButton from "./ClearButton"
 import ScoreBoard from "./ScoreBoard"

  export default {
    name: 'tic-tac-toe-game',

    components: {
      TicTacToeBoard,
      ClearButton,
      ScoreBoard
    },

    data() {
      return {
        isReset: false
      }
    },

    methods: {
      resetBoard(){
        this.isReset = true
      },
      boardRested(){
        this.isReset = false
      }
    },

    computed:{
      reset(){
        return this.isReset
      }
    }

  }
</script>

<style></style>
