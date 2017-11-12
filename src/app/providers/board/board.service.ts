import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Board } from './board';
import { BoardModel, BoardServiceModel } from './board.model';

@Injectable()
export class BoardService implements BoardServiceModel{

    getBoards(){

        let data = (id) => new Board({ 
                id : id,
                writer : 'get writer ' + id,
                title : 'get title ' + id,
                content : 'get board ' + id
            });

        let arr = [data(0), data(1), data(2)];

        return Observable.of(arr); // ajax
    }

    getBoard(id : string){

        let data = new Board({ 
                id : id,
                writer : 'get writer ' + id,
                title : 'get title ' + id,
                content : 'get board ' + id
            });

        return Observable.of(data); // ajax
    }

    addBoard(board : BoardModel){
        let data = board;
        return Observable.of(data); // ajax
    }

    editBoard(id : string, board : BoardModel){
        let data = { id, board };
        return Observable.of(data); // ajax
    }
    
    deleteBoard(id : string){
        let data = id;
        return Observable.of(data); // ajax
    }
}