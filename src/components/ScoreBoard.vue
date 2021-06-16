<template>
  <div class="game-info" id="score">
    <h1>Scoreboard</h1>

    <!--history score-->
    <div class="Scoreboard" v-for="score in scores">
      <p class="Player ">{{ score['oWon'] }}</p>
      <p class="Player ">{{ score['xWon'] }}</p>
      <p class="Player ">{{ score['tied'] }}</p>
    </div>

    <!--winner-->
    <div class="Scoreboard" v-for="player in players">
      <label id="winnerMsg" v-if="player['winner']">
        {{player['player']}} WON!
      </label>
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

    props: {},

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
  div {
    background-color: white;
  }

  h1 {
    margin: 0;
    padding: 1rem;
  }

  .game-info {
    margin: 3vmin 0 0;
    padding: 1rem .5rem;
    font-size: 1.25em;
    text-align: center;
    box-shadow: 2.5px 5px 25px white, 0 1px 6px white;
    /*text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;*/
    border-radius: .5rem;
    backdrop-filter: blur(10px);
    background: black;
    background-blend-mode: exclusion;
    color: white;
    justify-content: center;
  }

</style>
