import * as BoardActions from './board.actions';
import { BoardModel }          from './board.model';
import { Board }          from './board';

export type Action = BoardActions.All;

const initialState = {
    boards : [],
    board : {}
};

const newState = (state, newData ) => Object.assign({}, state, newData);

export function boardReducer(state = initialState, action : Action){
    // console.log(action);

    switch(action.type){
        case BoardActions.GET_BOARDS   :
            let board = new Board({ title : 'title'});
            return newState(state, { boards : [ board, board, board ] });
        case BoardActions.GET_BOARD    : return newState(state, { board : new Board({ id : action.id }) });
        case BoardActions.ADD_BOARD    :
            state.boards.push(action.board);
            return newState(state, { boards : state.boards } );
        case BoardActions.EDIT_BOARD   :
            return newState(state, { boards : state.boards.map(v => {
                if(v.id === action.id ) return Object.assign({}, v, {
                   writer : action.board.writer || v.writer,
                   title : action.board.title || v.title,
                   content : action.board.content || v.content
                });
                    return v;
                })
            });
        case BoardActions.DELETE_BOARD :
            return newState(state, { boards : state.boards.filter(v => v.id !== action.id) } );
        default : state;
    }

}