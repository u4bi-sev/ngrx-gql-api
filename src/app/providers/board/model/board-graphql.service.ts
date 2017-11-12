import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { BoardModel, BoardServiceModel } from '../board.model';

@Injectable()
export class BoardGraphQLService implements BoardServiceModel{

    constructor(private apollo: Apollo){ }
    
    getBoards = () => this.apollo.query({
        query: gql`
            {
                boards{
                    id,
                    writer,
                    title,
                    content
                }
            }
        `
    })
    .map((e : any) => JSON.parse(JSON.stringify(e.data.boards)) )
    .catch( (error) => this.err(error));


    getBoard = (id : string | number) => this.apollo.query({
        query: gql`
            {
                board(id : ${ id }){
                    id,
                    writer,
                    title,
                    content
                }
            }
        `
    })
    .map((e : any) => JSON.parse(JSON.stringify(e.data.board)) )
    .catch( (error) => this.err(error));


    addBoard = (board : BoardModel) => this.apollo.mutate({
        mutation : gql`
            mutation{
                addBoard( writer : "${ board.writer }", title : "${ board.title }", content : "${ board.content }" ){
                    id,
                    writer,
                    title,
                    content
                }
            }
        `
    })
    .map((e : any) => JSON.parse(JSON.stringify(e.data.addBoard)) )
    .catch( (error) => this.err(error));


    editBoard = (id : string | number, board : BoardModel) => this.apollo.mutate({
        mutation : gql`
            mutation{
                editBoard( id : ${ id }, writer : "${ board.writer }", title : "${ board.title }", content : "${ board.content }"){
                    id,
                    writer,
                    title,
                    content
                }
            }
        `
    })
    .map((e : any) => JSON.parse(JSON.stringify(e.data.editBoard)) )
    .catch( (error) => this.err(error));
    

    deleteBoard = (id : string | number) => this.apollo.mutate({
        mutation : gql`
            mutation{
                deleteBoard( id : ${ id } ){
                    id
                }
            }
        `
    })
    .map(e => id)
    .catch( (error) => this.err(error));
    
    private err = (error) => Observable.of(console.error(error));
}