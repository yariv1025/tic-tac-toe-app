<template>
  <div class="container-md">
    <div class="tic-tac-toe-board">
      <div v-for="(n, i) in 3">
        <div v-for="(n, j) in 3">
          <cell @click="performMove(i, j)" :value="board[i][j]"></cell>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import Cell from "./Cell"

  export default {
    name: 'tic-tac-toe-board',

    props:['reset'],

    data() {
      return {
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ]
      }
    },

    components: {
      Cell,
    },

    methods: {
      performMove(x, y) {
        if (this.board[x][y] !== '') {
          // Invalid move.
          return;
        }
        this.board[x][y] = 'x';
        this.$forceUpdate()
        // TODO implement some AI super-overlord algorithm that will calculate
        //  the computers move.
      }
    },

    watch:{
      ['reset'](){
        this.$emit('boardRested')
        setTimeout(()=> console.log('board reset'), 500)
      }
    }
  }
</script>


<style>
  .tic-tac-toe-board {
    display: flex;
    flex-wrap: wrap;
    width: 204px;
    height: 204px;
  }

  .container {
    white-space: nowrap;
  }
</style>
