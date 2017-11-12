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

    @Effect() getBoards$ = this.actions$
        .ofType(BoardActions.GET_BOARDS)
        .switchMap((action : Action) => this.boardService.getBoards(action))
        .map(v => new BoardActions.GetBoardsSuccess(v));

    @Effect() getBoard$ = this.actions$
        .ofType(BoardActions.GET_BOARD)
        .switchMap((action : Action) => this.boardService.getBoard(action))
        .map(v => new BoardActions.GetBoardSuccess(v));

    @Effect() addBoard$ = this.actions$
        .ofType(BoardActions.ADD_BOARD)
        .switchMap((action : Action) => this.boardService.addBoard(action))
        .map(v => new BoardActions.AddBoardSuccess(v));

    @Effect() editBoard$ = this.actions$
        .ofType(BoardActions.EDIT_BOARD)
        .switchMap((action : Action) => this.boardService.editBoard(action))
        .map(v => new BoardActions.EditBoardSuccess(v.id, v.board));
    
    @Effect() deleteBoard$ = this.actions$
        .ofType(BoardActions.DELETE_BOARD)
        .switchMap((action : Action) => this.boardService.deleteBoard(action))
        .map(v => new BoardActions.DeleteBoardSuccess(v));
}