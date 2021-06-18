import {ApiUrlService} from '../modules/ApiUrlService'

const axios = require('axios');

/* Fetching desirable data*/
export default {

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
