import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Board } from './board';
import { BoardModel, BoardServiceModel } from './board.model';

// import { BoardRESTfulService } from './model/board-restful.service';
import { BoardGraphQLService } from './model/board-graphql.service';

@Injectable()
export class BoardService implements BoardServiceModel{

    constructor(
        // private boardRESTfulService : BoardRESTfulService
        private boardGraphQLService : BoardGraphQLService
    ){ }


    /* RESTFul */

    // getBoards   = () => this.boardRESTfulService.getBoards();
    // getBoard    = (id : string | number) => this.boardRESTfulService.getBoard(id);
    // addBoard    = (board : BoardModel) => this.boardRESTfulService.addBoard(board);
    // editBoard   = (id : string | number, board : BoardModel) => this.boardRESTfulService.editBoard(id, board);
    // deleteBoard = (id : string | number) => this.boardRESTfulService.deleteBoard(id);

    /* GraphQL */
    
    getBoards   = () => this.boardGraphQLService.getBoards();
    getBoard    = (id : string | number) => this.boardGraphQLService.getBoard(id);
    addBoard    = (board : BoardModel) => this.boardGraphQLService.addBoard(board);
    editBoard   = (id : string | number, board : BoardModel) => this.boardGraphQLService.editBoard(id, board);
    deleteBoard = (id : string | number) => this.boardGraphQLService.deleteBoard(id);
   
}