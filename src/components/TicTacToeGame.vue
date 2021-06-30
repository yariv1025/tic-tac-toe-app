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

<script src="../js/TicTacToeGame.js"></script>

<style src="../css/TicTacToeGame.css"></style>
