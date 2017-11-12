import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Board } from './board';

@Injectable()
export class BoardService {

    getBoards(action){
        // console.log(action);

        let data = (id) => new Board({ 
                id : id,
                writer : 'get writer ' + id,
                title : 'get title ' + id,
                content : 'get board ' + id
            });

        let arr = [data(0), data(1), data(2)];

        return Observable.of(arr); // ajax
    }

    getBoard(action){
        // console.log(action);

        let data = new Board({ 
                id : action.id,
                writer : 'get writer ' + action.id,
                title : 'get title ' + action.id,
                content : 'get board ' + action.id
            });

        return Observable.of(data); // ajax
    }

    addBoard(action){
        // console.log(action);

        let data = action.board;
        return Observable.of(data); // ajax
    }

    editBoard(action){
        // console.log(action);

        let data = {
            id : action.id,
            board : action.board
        };
        return Observable.of(data); // ajax
    }
    
    deleteBoard(action){
        // console.log(action);
        
        let data = action.id
        return Observable.of(data); // ajax
    }
}