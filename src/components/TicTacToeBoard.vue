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


<script src="../js/TicTacToeBoard.js"></script>

<style src= "../css/TicTacToeBoard.css"></style>
