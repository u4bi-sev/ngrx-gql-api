import { Action } from '@ngrx/store';
import { BoardModel }          from './board.model';

export const GET_BOARDS    = '[Boards] GetBoards';
export const GET_BOARD     = '[Boards] GetBoard';
export const ADD_BOARD     = '[Boards] AddBoard';
export const EDIT_BOARD    = '[Boards] EditBoard';
export const DELETE_BOARD  = '[Boards] DeleteBoard';

export class GetBoards implements Action {
    readonly type = GET_BOARDS;
}

export class GetBoard implements Action {
    readonly type = GET_BOARD;

    constructor(public id: string){}
}

export class AddBoard implements Action {
    readonly type = ADD_BOARD;

    constructor(public board: BoardModel){}
}

export class EditBoard implements Action {
    readonly type = EDIT_BOARD;

    constructor(public id : string, public board: BoardModel){}
}

export class DeleteBoard implements Action {
    readonly type = DELETE_BOARD;

    constructor(public id : string){}
}

export type All
    = GetBoards
    | GetBoard
    | AddBoard
    | EditBoard
    | DeleteBoard;