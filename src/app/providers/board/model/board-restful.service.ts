import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BoardModel, BoardServiceModel } from '../board.model';

@Injectable()
export class BoardRESTfulService implements BoardServiceModel{

    getBoards = () => Observable.ajax({
        url : 'http://localhost:7778/board',
        method : 'GET',
        crossDomain : true
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    getBoard = (id : string | number) => Observable.ajax({
        url : 'http://localhost:7778/board/' + id,
        method : 'GET',
        crossDomain : true
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    addBoard = (board : BoardModel) => Observable.ajax({
        url : 'http://localhost:7778/board',
        method : 'POST',
        crossDomain : true,
        headers: { 'Content-Type': 'application/json' },
        body : { ...board }
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    editBoard = (id : string | number, board : BoardModel) => Observable.ajax({
        url : 'http://localhost:7778/board/' + id,
        method : 'PUT',
        crossDomain : true,
        headers: { 'Content-Type': 'application/json' },
        body : { ...board }
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));

    
    deleteBoard = (id : string | number) => Observable.ajax({
        url : 'http://localhost:7778/board/' + id,
        method : 'DELETE',
        crossDomain : true
    })
    .map(e => id)
    .catch( (error) => this.err(error));
    
    private err = (error) => Observable.of(console.error(error));
}