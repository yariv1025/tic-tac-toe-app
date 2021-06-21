<template>
  <div class="tic-tac-toe-board" id="board">

    <div :key="i.value" v-for="(n, i) in 3">
      <div :key="j.value" v-for="(n, j) in 3">

        <cell @click="play(i, j)"
              :value="board[i][j]">
        </cell>
      </div>
    </div>

  </div>
</template>


<script>
  import Cell from "./Cell"
  import {mapGetters} from 'vuex';

  export default {
    name: 'tic-tac-toe-board',

    props: ['reset'],

    data() {
      return {
        board: [
          Array(3).fill(null),
          Array(3).fill(null),
          Array(3).fill(null),
        ],
        inProgress: true,
        stepNumber: 0,
        value: '',
        winner: null,
        previousWinner: null
      }
    },

    components: {
      Cell,
    },

    methods: {
      // Play
      play(x, y) {
        // Game rounds:
        // 1. check's move + place symbol + switch turns
        // 2. check for win or tie
        // 3. update winner / tie

        this.placeSymbol(x, y)
        this.hasWinner()

        if (this.winner !== null && !this.inProgress) {
          this.previousWinner = this.winner
          this.updateScore()
          // TODO: Game Over - stop the game
        }
        else if (this.winner === null && this.stepNumber === 9) {
          this.previousWinner = 'Tie'
          this.updateScore()
          // TODO: Game Over - stop the game
        }
      },

      // Places the symbol on the board
      placeSymbol(x, y) {

        if (this.board[x][y] !== null) {
          // Invalid move - No action will be taken
          console.log("Invalid move")
          return
        }

        this.board[x][y] = this.currentPlayer
        this.stepNumber += 1
        this.$forceUpdate()
        this.swapTurns()
      },

      // Checks for winner
      hasWinner(x, y) {

        const winningCombination = [
          [[0, 0], [0, 1], [0, 2]],
          [[1, 0], [1, 1], [1, 2]],
          [[2, 0], [2, 1], [2, 2]],
          [[0, 0], [1, 0], [2, 0]],
          [[0, 1], [1, 1], [2, 1]],
          [[0, 2], [1, 2], [2, 2]],
          [[0, 0], [1, 1], [2, 2]],
          [[0, 2], [1, 1], [2, 0]],
        ]

        // For each winning combination - search for a winner
        const res = winningCombination.forEach((position) => {
          const [[a0, a1], [b0, b1], [c0, c1]] = position

          if (this.board[a0][a1] && this.board[a0][a1] === this.board[b0][b1] &&
            this.board[a0][a1] === this.board[c0][c1]) {
            // console.log("The winner is:", this.board[a0][a1])
            this.inProgress = false
            this.winner = this.board[a0][a1]
            return true
          }
          return false
        })
        return res
      },

      // Update score board
      updateScore(){
        this.$store.commit({
          type: 'updateScoreBoard',
          player: this.winner
        })
      },

      // Swap turns between the players
      swapTurns(player) {
        this.$store.commit({
          type: 'swapTurns',
          playing: player
        })
      },

      resetWinner() {
        this.$store.commit({
          type: 'resetWinner',
          playing: this.previousWinner
        })
      }

    },

    // Clear our board
    watch: {
      ['reset']() {
        // code that's clear the game board
        this.board = [
          Array(3).fill(null),
          Array(3).fill(null),
          Array(3).fill(null)
        ]
        this.inProgress = true
        this.stepNumber = 0
        this.value = ''
        this.resetWinner()
        this.winner = null
        this.$emit('boardIsCleared')
      }
    },

    computed: {
      ...mapGetters({
        currentPlayer: 'currentPlayer',
        winnerIs: 'winnerIs'
      })
    }
  }
</script>


<style>
  .tic-tac-toe-board {
    flex-wrap: wrap;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, auto);
    padding: 20px;
  }
</style>
