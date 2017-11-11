import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as BoardActions from './board.actions';
import { BoardService } from './board.service';

export type Action = BoardActions.All;

@Injectable()
export class BoardEffects {

    constructor(private actions$ : Actions, private boardService : BoardService){}

    @Effect() getBoard$ = this.actions$
        .ofType(BoardActions.GET_BOARD).switchMap((action : Action) => this.boardService.getBoard(action))
        .map(v => {
            console.log('[effects.ts] test effects', v);
            return new BoardActions.testEffects(v)
        });

}