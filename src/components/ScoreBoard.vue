<template>
  <div class="game-info" id="score">
    <h1>Scoreboard</h1>

    <!--history score-->
    <div class="scores" v-for="score in scores">
      <p
        v-if="score['wasPrevGame'] && (score['previousGameScore'] === 'X' ||
        score['previousGameScore'] === 'O')">
        Previous Game Score:
        {{score['previousGameScore']}} Won
      </p>
      <p v-if="score['wasPrevGame'] && score['previousGameScore'] === 'Tied' ">
        Previous Game Score:
        The game {{score['previousGameScore']}}
      </p>
      <p>O-score: {{ score['oWon'] }}</p>
      <p>X-score: {{ score['xWon'] }}</p>
      <p>tie: {{ score['tie'] }}</p>
    </div>

    <!--winner-->
    <div class="winner" v-for="player in players">
      <label v-if="player['isOWin']">{{player['playerO']}} won!</label>
      <label v-if="player['isXWin']">{{player['playerX']}} won!</label>
      <label v-if="player['tie']">The game tied!</label>
    </div>

  </div>
</template>


<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "score-board",

    data() {
      return {}
    },

    props: ['clearWinner'],

    methods: {
      click() {
        this.$emit('click')
      }

    },

    computed: {
      ...mapGetters({
        scores: 'scores',
        players: 'players',
      }),

    },
  }
</script>


<style scoped>
  /*div {*/
  /*  background-color: white;*/
  /*}*/

  /*h1 {*/
  /*  margin: 3vmin 0 0;*/
  /*  padding: 1rem .5rem;*/
  /*  color: black;*/
  /*  justify-content: center;*/
  /*}*/

  /*p {*/
  /*  margin: 0;*/
  /*  padding: 1rem;*/
  /*  color: black;*/
  /*}*/

  .game-info {
    margin: 60vmin 0 0;
    /*padding: 1rem .5rem;*/
    font-size: 1.25em;
    text-align: center;
    /*box-shadow: 2.5px 5px 25px white, 0 1px 6px white;*/
    /*text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;*/
    /*border-radius: .5rem;*/
    backdrop-filter: blur(10px);
    /*background: black;*/
    background-blend-mode: exclusion;
    color: white;
    justify-content: center;
  }

</style>
