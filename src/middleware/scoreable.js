import {ApiUrlService} from '../modules/ApiUrlService'

const axios = require('axios');

/* Fetching desirable data*/
export default {

  async saveScore(scores) {
    const data = JSON.stringify({
      "oWon": scores['oWon'],
      "xWon": scores['xWon'],
      "tie": scores['tie'],
      "previousGameWinner": scores['previousGameWinner'],
      "wasPrevGame": scores['wasPrevGame']
    });

    const config = {
      method: 'post',
      url: ApiUrlService.createScoreBoard(),
      headers: {
        'Content-Type': 'application/json',
        'mode': 'Access-Control-Allow-Origin'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  },

  async getScore() {
    const data = '';

    const config = {
      method: 'get',
      url: ApiUrlService.getScoreBoard(),
      headers: {
        'mode': 'Access-Control-Allow-Origin'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}
