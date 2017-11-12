import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Board }          from './providers/board/board';
import { BoardModel } from './providers/board/board.model';
import * as BoardActions from './providers/board/board.actions';


interface AppState{
    board : any;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private board$ : Observable<any>;
    public board : BoardModel;
    public boards : BoardModel[];

    constructor(private store : Store<AppState>){
        this.board$ = this.store.select('board');
        this.board$.subscribe(e => {
            if(e){
                // console.log(e);
                this.board = e.board;
                this.boards = e.boards;
            }
        });

        this.getBoards();
        this.getBoard(1);

    }

    add = () => this.addBoard( new Board({ writer : 'add writer', title   : 'add title', content : 'add content' }));
    edit = () => this.editBoard(4, new Board({ title : 'edit' }));
    del =  () =>  this.deleteBoard(4);

    getBoards(){
        this.store.dispatch(new BoardActions.GetBoards());
    }

    getBoard(id : string | number){
        this.store.dispatch(new BoardActions.GetBoard(id));
    }

    addBoard(board : BoardModel){
        this.store.dispatch(new BoardActions.AddBoard(board));
    }

    editBoard(id : string | number, board : BoardModel){
        
        this.boards.filter(a => a.id === id).map(v => Object.keys(board).filter(e => board[e] === '' ).map(e => board[e] = v[e]) );
        
        this.store.dispatch(new BoardActions.EditBoard(id, board));
    }

    deleteBoard(id : string | number){
        this.store.dispatch(new BoardActions.DeleteBoard(id));
    }    
}
