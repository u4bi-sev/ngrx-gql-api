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
        .switchMap((action : any) => this.boardService.getBoards())
        .map(v => new BoardActions.GetBoardsSuccess(v));

    @Effect() getBoard$ = this.actions$
        .ofType(BoardActions.GET_BOARD)
        .switchMap((action : any) => this.boardService.getBoard(action.id))
        .map(v => new BoardActions.GetBoardSuccess(v));

    @Effect() addBoard$ = this.actions$
        .ofType(BoardActions.ADD_BOARD)
        .switchMap((action : any) => this.boardService.addBoard(action.board))
        .map(v => new BoardActions.AddBoardSuccess(v));

    @Effect() editBoard$ = this.actions$
        .ofType(BoardActions.EDIT_BOARD)
        .switchMap((action : any) => this.boardService.editBoard(action.id, action.board))
        .map(v => new BoardActions.EditBoardSuccess(v.id, v.board));
    
    @Effect() deleteBoard$ = this.actions$
        .ofType(BoardActions.DELETE_BOARD)
        .switchMap((action : any) => this.boardService.deleteBoard(action.id))
        .map(v => new BoardActions.DeleteBoardSuccess(v));
}