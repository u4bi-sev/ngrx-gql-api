import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as BoardActions from './board.actions';
export type Action = BoardActions.All;

@Injectable()
export class BoardService {

    getBoard(action){
        // console.log(action);
        return Observable.of('@getBoard id ' + action.id); // ajax
    }
}