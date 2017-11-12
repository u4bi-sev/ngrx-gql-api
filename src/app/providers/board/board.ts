import { BoardModel }          from './board.model';

export class Board {
    public id      : string | number;
    public writer  : string;
    public title   : string;
    public content : string;

    constructor(board : BoardModel){
        board.id ? this.id = board.id : delete this.id;

        this.writer  = board.writer  || '';
        this.title   = board.title   || '';
        this.content = board.content || '';
    }

}