import { BoardModel }          from './board.model';

export class Board {
    public id      : string;
    public writer  : string;
    public title   : string;
    public content : string;

    constructor(board : BoardModel){
        this.id      = board.id      || '';
        this.writer  = board.writer  || '';
        this.title   = board.title   || '';
        this.content = board.content || '';
    }

}