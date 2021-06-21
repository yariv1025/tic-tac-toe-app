const inDevelopment = process.env.NODE_ENV === 'development'

export class ApiUrlService {
    // static apiRootUrl = inDevelopment ? 'http://localhost:3001/': 'https://find-me-computer.com' //TODO: add production url
    static apiRootUrl = 'http://localhost:3001'

    // static apiCurrentVersion = 'v1/'
    // static apiFullRootUrl = ApiUrlService.apiRootUrl + ApiUrlService.apiCurrentVersion

    static apiFullRootUrl = ApiUrlService.apiRootUrl

    /*Score board url's*/
    static createScoreBoard(){return ApiUrlService.apiFullRootUrl + '/score-board'}

    static getScoreBoard(){return ApiUrlService.apiFullRootUrl + '/score-board/retrieve'}

    /*Game board url's*/
    static createGameBoard(){return ApiUrlService.apiFullRootUrl + '/game-board'}

    static getGameBoard(){return ApiUrlService.apiFullRootUrl + '/game-board/retrieve'}

    static updateGameBoard(){return ApiUrlService.apiFullRootUrl + '/game-board/update'}



}
