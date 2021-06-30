<template>
  <div class="game-info" id="score">
    <h1>Scoreboard</h1>

    <!--history score-->
    <div class="scores" v-for="score in scores">
      <p v-if="score['wasPrevGame'] && (score['previousGameWinner'] === 'X' ||
        score['previousGameWinner'] === 'O')">
        Previous Game Score: {{score['previousGameWinner']}} Won
      </p>
      <p v-if="score['wasPrevGame'] && score['previousGameWinner'] === 'Tied' ">
        Previous Game Score: The game {{score['previousGameWinner']}}
      </p>
      <p>O-score: {{ score['oWon'] }}</p>
      <p>X-score: {{ score['xWon'] }}</p>
      <p>tie: {{ score['tie'] }}</p>
    </div>

    <!--winner-->
    <div class="winner" v-for="player in players">
      <label v-if="player['isOWin']">{{ player['playerO'] }} won!</label>
      <label v-if="player['isXWin']">{{ player['playerX'] }} won!</label>
      <label v-if="player['isTie']">The game tied!</label>
      <label v-if="player['wasPrevGame'] === false">No previous games!</label>
    </div>

  </div>
</template>


<script src="../js/ScoreBoard.js"></script>


<style src="../css/ScoreBoard.css" scoped></style>
