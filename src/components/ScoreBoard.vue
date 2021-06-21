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

  h1 {
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 26px;
    letter-spacing: 4.4px;
    word-spacing: 3.4px;
    color: #4AADC1;
    font-weight: 700;
    text-decoration: none;
    font-style: normal;
    font-variant: small-caps;
    text-transform: uppercase;
  }

  p {
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 18px;
    letter-spacing: 3.2px;
    word-spacing: 2.4px;
    color: #4AADC1;
    font-weight: 400;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: small-caps;
    text-transform: none;
  }

  .winner {
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 22px;
    letter-spacing: 3.2px;
    word-spacing: 2.4px;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none solid rgb(68, 68, 68);
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
  }

  .game-info {
    flex-wrap: wrap;
    display: inline;
    margin: 60vmin 0 0;
    justify-content: center;
    align-content: center;
    font-size: 1.25em;
    text-align: center;
    backdrop-filter: blur(10px);
    background-blend-mode: exclusion;
    color: white;
    padding: 30px;
    /*text-shadow: 5px 1px 3px #7791A4;*/
  }

</style>
