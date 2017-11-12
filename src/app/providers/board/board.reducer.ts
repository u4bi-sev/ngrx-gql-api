import * as BoardActions from './board.actions';
import { BoardModel }          from './board.model';
import { Board }          from './board';

export type Action = BoardActions.All;

const initialState = {
    pending: false,
    boards : [],
    board : {}
};

const newState = (state, newData ) => Object.assign({}, state, newData);

export function boardReducer(state = initialState, action : Action){
    // console.log(action);

    switch(action.type){
        case BoardActions.GET_BOARDS   :
            return newState(state, { pending: true });
        case BoardActions.GET_BOARD    :
            return newState(state, { pending: true });
        case BoardActions.ADD_BOARD    :
            return newState(state, { pending: true } );
        case BoardActions.EDIT_BOARD   :
            return newState(state, { pending: true } );
        case BoardActions.DELETE_BOARD :
            return newState(state, { pending: true } );
        case BoardActions.GET_BOARDS_SUCCESS :
            return newState(state, { pending: false, boards : action.boards });
        case BoardActions.GET_BOARD_SUCCESS :
            return newState(state, { pending: false, board : action.board });
        case BoardActions.ADD_BOARD_SUCCESS :
            state.boards.push(action.board);
            return newState(state, { pending: false, boards : state.boards } );
        case BoardActions.EDIT_BOARD_SUCCESS :
            state.pending = false;
            state.boards.filter(v => v.id === action.id).map( (e, index) => Object.keys(e).map(v => e[v] = action.board[v]) );
            return newState(state, { pending: false, boards : state.boards });
        case BoardActions.DELETE_BOARD_SUCCESS :
            state.pending = false;
            return newState(state, { boards : state.boards.filter(v => v.id !== action.id) } );
        default : state;
    }

}