import {ApiUrlService} from '../modules/ApiUrlService'

const axios = require('axios');

/* Fetching desirable data*/
export default {

  // Create a game board schema in our DB
  async setBoard(board) {
    const data = JSON.stringify({
      "board": board
    });

    const config = {
      method: 'post',
      url: ApiUrlService.createGameBoard(),
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

  // Find and get a game board schema by ID from our DB
  async getBoardId() {
    const config = {
      method: 'get',
      url: ApiUrlService.getGameBoard(),
      headers: {
        'mode': 'Access-Control-Allow-Origin'
      }
    };

    try {
      const response = await axios(config)
      return response.data[0]["_id"]
    } catch (e) {
      console.error(e)
    }
  },

  // Update the game board schema in our DB
  async updateBoard(board, boardId) {
    const data = JSON.stringify({
      "board": board,
      "_Id": boardId
    });

    const config = {
      method: 'put',
      url: ApiUrlService.updateGameBoard(),
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

  }
}
