<template>
  <div class="game" id="game">
    <div class="game-area">

      <div class="game-info">
        <score-board @updateBoard="updateScore"></score-board>
      </div>

      <tic-tac-toe-board :reset="restart"
                         @boardRested="boardRested">
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
        winner: null,
        player: null,
        isReset: false,
      }
    },

    methods: {

      resetBoard() {
        this.isReset = true
        console.log(`Game component: clear button pushed`)
      },

      boardRested() {
        this.isReset = false
        console.log(this.isReset)
      },

      updateScore() {}

    },

    computed: {
      restart() {
        console.log("Game component: restart call")
        return this.isReset
      },
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
