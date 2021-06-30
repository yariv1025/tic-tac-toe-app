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
