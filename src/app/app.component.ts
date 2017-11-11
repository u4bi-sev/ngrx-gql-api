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
            // console.log(e);
            if(e){
                this.board = e.board;
                this.boards = e.boards;
            }
        });

        this.getBoards();
        this.getBoard('test');

        // this.addBoard( new Board({ id : '0000', title   : 'asdf'}));

        // this.editBoard('0000', new Board({ title : 'edit' }));

        // this.deleteBoard('0000');

    }

    add = () => this.addBoard( new Board({ id : '0000', title   : 'asdf'}));
    edit = () => this.editBoard('0000', new Board({ title : 'edit' }));
    del =  () =>  this.deleteBoard('0000');

    getBoards(){
        this.store.dispatch(new BoardActions.GetBoards());
    }

    getBoard(id : string){
        this.store.dispatch(new BoardActions.GetBoard(id));
    }

    addBoard(board : BoardModel){
        this.store.dispatch(new BoardActions.AddBoard(board));
    }

    editBoard(id : string, board : BoardModel){
        this.store.dispatch(new BoardActions.EditBoard(id, board));
    }

    deleteBoard(id : string){
        this.store.dispatch(new BoardActions.DeleteBoard(id));
    }    
}
