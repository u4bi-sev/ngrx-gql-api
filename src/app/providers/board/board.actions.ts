import { Action } from '@ngrx/store';
import { BoardModel }          from './board.model';

export const GET_BOARDS    = '[Boards] GetBoards';
export const GET_BOARD     = '[Boards] GetBoard';
export const ADD_BOARD     = '[Boards] AddBoard';
export const EDIT_BOARD    = '[Boards] EditBoard';
export const DELETE_BOARD  = '[Boards] DeleteBoard';

export const GET_BOARDS_SUCCESS    = '[Boards] GetBoardsSuccess';
export const GET_BOARD_SUCCESS     = '[Boards] GetBoardSuccess';
export const ADD_BOARD_SUCCESS     = '[Boards] AddBoardSuccess';
export const EDIT_BOARD_SUCCESS    = '[Boards] EditBoardSuccess';
export const DELETE_BOARD_SUCCESS  = '[Boards] DeleteBoardSuccess';

export class GetBoards implements Action {
    readonly type = GET_BOARDS;
}

export class GetBoard implements Action {
    readonly type = GET_BOARD;

    constructor(public id: string | number){}
}

export class AddBoard implements Action {
    readonly type = ADD_BOARD;

    constructor(public board: BoardModel){}
}

export class EditBoard implements Action {
    readonly type = EDIT_BOARD;

    constructor(public id : string | number, public board: BoardModel){}
}

export class DeleteBoard implements Action {
    readonly type = DELETE_BOARD;

    constructor(public id : string | number){}
}

export class GetBoardsSuccess implements Action {
    readonly type = GET_BOARDS_SUCCESS;

    constructor(public boards: BoardModel[]){}
}

export class GetBoardSuccess implements Action {
    readonly type = GET_BOARD_SUCCESS;

    constructor(public board: BoardModel){}
}

export class AddBoardSuccess implements Action {
    readonly type = ADD_BOARD_SUCCESS;

    constructor(public board: BoardModel){}
}

export class EditBoardSuccess implements Action {
    readonly type = EDIT_BOARD_SUCCESS;

    constructor(public id : string | number, public board: BoardModel){}
}

export class DeleteBoardSuccess implements Action {
    readonly type = DELETE_BOARD_SUCCESS;

    constructor(public id : string | number){}
}

export type All
    = GetBoards
    | GetBoard
    | AddBoard
    | EditBoard
    | DeleteBoard
    | GetBoardsSuccess
    | GetBoardSuccess
    | AddBoardSuccess
    | EditBoardSuccess
    | DeleteBoardSuccess;