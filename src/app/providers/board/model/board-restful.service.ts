import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { BoardModel, BoardServiceModel } from '../board.model';

@Injectable()
export class BoardRESTfulService implements BoardServiceModel{
    
    private url : string;

    constructor(url : string){
        this.url = url;
    }
    
    getBoards = () => Observable.ajax({
        url : this.url,
        method : 'GET',
        crossDomain : true
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    getBoard = (id : string | number) => Observable.ajax({
        url : this.url + id,
        method : 'GET',
        crossDomain : true
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    addBoard = (board : BoardModel) => Observable.ajax({
        url : this.url,
        method : 'POST',
        crossDomain : true,
        headers: { 'Content-Type': 'application/json' },
        body : { ...board }
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));


    editBoard = (id : string | number, board : BoardModel) => Observable.ajax({
        url : this.url + id,
        method : 'PUT',
        crossDomain : true,
        headers: { 'Content-Type': 'application/json' },
        body : { ...board }
    })
    .map(e => e.response)
    .catch( (error) => this.err(error));

    
    deleteBoard = (id : string | number) => Observable.ajax({
        url : this.url + id,
        method : 'DELETE',
        crossDomain : true
    })
    .map(e => id)
    .catch( (error) => this.err(error));
    
    private err = (error) => Observable.of(console.error(error));
}