import {ApiUrlService} from '../modules/ApiUrlService'

const axios = require('axios');

// Axios connection (calls) to the back-end
export default {

  // Create a score board schema in our DB
  async saveScore(scores) {
    const data = JSON.stringify({
      "oWon": scores['oWon'],
      "xWon": scores['xWon'],
      "isTie": scores['isTie'],
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

  // Find and get a score board schema from our DB
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
