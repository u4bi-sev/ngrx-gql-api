import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Board } from './board';
import { BoardModel, BoardServiceModel } from './board.model';

import { BoardRESTfulService } from './model/board-restful.service';

@Injectable()
export class BoardService implements BoardServiceModel{

    constructor(private boardRESTfulService : BoardRESTfulService){ }

    getBoards = () => this.boardRESTfulService.getBoards();
    
    getBoard = (id : string | number) => this.boardRESTfulService.getBoard(id);
    
    addBoard = (board : BoardModel) => this.boardRESTfulService.addBoard(board);
    
    editBoard = (id : string | number, board : BoardModel) => this.boardRESTfulService.editBoard(id, board);
    
    deleteBoard = (id : string | number) => this.boardRESTfulService.deleteBoard(id);

}