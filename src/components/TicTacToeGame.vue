<template>
  <div class="game" id="game">
    <div class="game-area">

      <div class="game-info">
        <score-board></score-board>
      </div>

      <tic-tac-toe-board :reset="isResetTrigger"
                         @boardIsCleared="resetTrigger">
      </tic-tac-toe-board>

      <clear-button @clearBoard="resetBoard"></clear-button>

    </div>
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
        isResetTrigger: false,
      }
    },

    methods: {

      resetBoard() {
        this.isResetTrigger = true;
      },

      resetTrigger() {
        this.isResetTrigger = false;
      }

    }
  }
</script>


<style>
  body {
    margin: 0;
  }
  .game {
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .game-area {
    display: flex;
    flex-flow: column;
  }
</style>
