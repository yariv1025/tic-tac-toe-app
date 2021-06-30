import TicTacToeBoard from "../components/TicTacToeBoard"
import ClearButton from "../components/ClearButton"
import ScoreBoard from "../components/ScoreBoard"

export default {
  name: 'tic-tac-toe-game',

  components: {
    TicTacToeBoard,
    ClearButton,
    ScoreBoard
  },

  data() {
    return {
      isResetTrigger: false,
    }
  },

  methods: {

    resetBoard() {
      this.isResetTrigger = true;
    },

    resetTrigger() {
      this.isResetTrigger = false;
    }

  }
}
