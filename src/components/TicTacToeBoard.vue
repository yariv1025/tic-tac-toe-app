<template>
  <div class="tic-tac-toe-board" id="board">

    <div v-for="(n, i) in 3">
      <div v-for="(n, j) in 3">

        <cell @click="play(i, j)"
              @cellBlocked="raiseMessage"
              :game-over="gameOver"
              :value="board[i][j]">
        </cell>
      </div>
    </div>

  </div>
</template>


<script>
import Cell from "./Cell";
import {mapGetters} from 'vuex';
import scoreable from "../middleware/scoreable";
import boardabale from "../middleware/boardabale";

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
      previousBoard: [],
      inProgress: true,
      stepNumber: 0,
      winner: null,
      previousWinner: null,
      firstMove: true,
      nextMove: null,
      boardId: null,
      gameOver: null
    }
  },

  components: {
    Cell,
  },

  methods: {
    // Game rounds:
    // 1. check's move + place symbol + switch turns
    // 2. check for win or tie
    // 3. update score, winner / tie
    async play(x, y) {
      this.nextMove = this.placeSymbol(x, y);

      // Check if there is a winner and if the game is over
      if (this.stepNumber >= 5 ) {
        this.hasWinner();
        this.isGameOver();
      }
      // Check if a step has been taken
      if (this.nextMove) {
        this.swapTurns()
        await this.saveBoard();
      }

    },

    // Places 'X' or 'O' symbol on the board
    placeSymbol(x, y) {

      // Invalid move - No action will be taken
      if (this.board[x][y] !== null) {
        console.log("Invalid move");
        return false
      }

      this.board[x][y] = this.currentPlayer;
      this.stepNumber += 1;
      this.$forceUpdate();
      return true
    },

    // Checks for winner, for each winning combination
    hasWinner() {

      const winningCombination = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ];

      // search for a winner
      return winningCombination.forEach((position) => {
        const [[a0, a1], [b0, b1], [c0, c1]] = position;

        if (this.board[a0][a1] && this.board[a0][a1] === this.board[b0][b1] &&
          this.board[a0][a1] === this.board[c0][c1]) {
          this.inProgress = false;
          this.winner = this.board[a0][a1];
          return true;
        }
        return false;
      });
    },

    // Update score board
    updateScore() {
      this.$store.commit({
        type: 'updateScoreBoard',
        player: this.winner
      })
      scoreable.saveScore(this.scores[0]);
    },

    // Swap turns between the players
    swapTurns(player) {
      this.$store.commit({
        type: 'swapTurns',
        playing: player
      })
    },

    // Update the winner status
    resetWinnerStatus() {
      this.$store.commit({
        type: 'resetWinnerStatus',
        playing: this.previousWinner
      })
    },

    // Saving the current state of the board
    async saveBoard() {
      if (this.firstMove) {
        await boardabale.setBoard(this.board);
        this.boardId = await boardabale.getBoardId();
        this.firstMove = false;
      }
      else {
        await boardabale.updateBoard(this.board, this.boardId);
      }
    },

    // Checks if the game is over (update the previous winner) and stop the game
    // TODO: If there is a winner OR the game is over -> save the board state and STOP the game.
    isGameOver() {
      if (this.winner !== null && !this.inProgress) {
        this.previousWinner = this.winner;
        this.updateScore();
        this.gameOver = true;
        return true;
        //Game Over

      } else if (this.winner === null && this.stepNumber === 9) {
        this.previousWinner = 'Tie';
        this.updateScore();
        this.gameOver = true;
        return true;
        //Game Over
      }
      else {
        return false;
        //Game is not Over
      }
    },

    raiseMessage() {
      console.log("Cell blocked")
    }
  },

  // LISTENER - Clear our board when is state changed
  watch: {
    ['reset']() {
      // code that's clear the game board
      this.board = [
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null)
      ];
      this.inProgress = true;
      this.stepNumber = 0;
      this.value = '';
      this.resetWinnerStatus();
      this.winner = null;
      this.previousWinner = null;
      this.gameOver = false;
      this.$emit('boardIsCleared');
    }
  },

  // State getter
  computed: {
    ...mapGetters({
      currentPlayer: 'currentPlayer',
      winnerIs: 'winnerIs',
      scores: 'scores'
    })
  },

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
