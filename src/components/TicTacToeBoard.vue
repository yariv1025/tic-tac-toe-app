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
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        inProgress: true,
        stepNumber: 0,
        value: '',
        winner: null
      }
    },

    components: {
      Cell,
    },

    methods: {
      // Play
      play(x, y) {
        // Game rounds:
        // 1. check's move
        // 2. place symbol
        // 2. check for win or tie
        // 4. switch turns
        // 5. restart

        this.placeSymbol(x, y)
        this.hasWinner()

        if ((this.winner === 'x' || this.winner === 'o') && !this.inProgress) {
          console.log(`${this.winner} IS THE WINNER!`)
          this.$emit('Has winner') // Game ended

        } else if (this.winner === null && this.stepNumber === 9 && !this.inProgress) {
          console.log('Tie')
          this.$emit('HasTie') // Game ended
        }

        this.swapTurns()

      },

      // Places the symbol on the board
      placeSymbol(x, y) {

        if (this.board[x][y] !== '') {
          // Invalid move - No action will be taken
          console.log("Invalid move")
          return
        }

        this.board[x][y] = this.currentPlayer['player']
        this.stepNumber += 1
        this.$forceUpdate()
      },

      // Checks for winner
      hasWinner(x, y) {

        // for (let i = 0; i < 3; i++) {
        //   for (let j = 0; j < 1; j++) {
        //
        //     // checks row
        //     if (this.board[i][j] !== '' && this.board[i][j] === this.board[i][j+1] ===
        //       this.board[i][j+2]) {
        //       this.winner = this.board[i][j]
        //       this.inProgress = false
        //       return
        //     }
        //     // checks column
        //     if (this.board[j][i] !== '' && this.board[j][i] ===
        //       this.board[j][i+1] === this.board[j][i+2]) {
        //       this.winner = this.board[j][i]
        //       this.inProgress = false
        //       return
        //     }
        //     // TODO: checks diagonal
        //     if (this.board[i][i] !== '' && this.board[i][i] ===
        //       this.board[i+1][i+1] === this.board[i+2][i+2]) {
        //       this.winner = this.board[i][i]
        //       this.inProgress = false
        //       return
        //     }
        //     if(this.board[j][j+2] !== '' && this.board[i][j+2] ===
        //       this.board[i+1][j+1] === this.board[i+2][j]) {
        //       this.winner = this.board[i][i]
        //       return
        //     }
        //   }
        // }
        const winningCombination = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]
        // For each winning combination - search for a winner
        // winningCombination.forEach((position) => {
        //   const [a, b, c] = position
        //   if (this.board[a][a] && this.board[a][a] === this.board[a][b] &&
        //     this.board[a][a] === this.board[a][c]) {
        //     this.inProgress = false
        //     console.log("The winner is:", this.winner)
        //     return this.board[a][a] //  'O' or 'X'
        //   }
        // })

          // If there's winner
        this.$store.commit({
          type: 'updateWinnerAndScore',
          player: this.currentPlayer
        })
      },

      // Swap turns between the players
      swapTurns(player) {
        this.$store.commit({
          type: 'swapTurns',
          playing: player
        })
      },
    },

    // Clear our board
    watch: {
      ['reset']() {
        // code that's clear the game board
        for(let i = 0; i < 3; i++){
          for(let j = 0; j < 3; j++){
            this.board[i][j] = ''
          }
        }

        this.item.find((item) => {
          item
        })
        // this.$emit('boardIsCleared')
        console.log("Watcher reset")
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
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(3, auto);
  }
</style>
