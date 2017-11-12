const express = require('express');
const expressGraphQL = require('express-graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');

const API_URL = 'http://localhost:7778/board/';

const BoardsType = new GraphQLObjectType({
    name : 'Boards',
    fields : () => ({
        id    : { type : GraphQLInt },
        writer : { type : GraphQLString },
        title : { type : GraphQLString },                
        content  : { type : GraphQLString }
    }) 
});


const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        /* get all */
        boards : {
            type : new GraphQLList(BoardsType),
            resolve : (parentValue, args) => axios.get(API_URL).then(res => res.data)
        },
        /*  get single */
        board :{
            type : BoardsType,
            args : {
                id : { type : GraphQLInt }
            },
            resolve : (parentValue, args) => axios.get(API_URL + args.id).then(res => res.data)
        }
    } 
});


// mutations
const mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
        /* add */
        addBoard : {
            type : BoardsType,
            args : {

                writer : { type : new GraphQLNonNull(GraphQLString) },
                title : { type : new GraphQLNonNull(GraphQLString) },                               
                content : { type : new GraphQLNonNull(GraphQLString) }
            },
            resolve : (parentValue, args) => axios.post(API_URL,
                {
                    writer : args.writer,
                    title : args.title,
                    content : args.content
                }).then(res => res.data)
        },
        /* delete */
        deleteBoard : {
            type : BoardsType,
            args : {
                id : { type : new GraphQLNonNull(GraphQLInt)}
            },
            resolve : (parentValue, args) => axios.delete(API_URL + args.id).then(res => res.data)
        },
        /* edit */
        editBoard : {
            type : BoardsType,
            args : {
                id : { type : new GraphQLNonNull(GraphQLInt)},
                writer : { type : GraphQLString },
                title : { type : GraphQLString },
                content : { type : GraphQLString }
            },
            resolve : (parentValue, args) => axios.patch(API_URL + args.id, args).then(res => res.data)
        },        
    }
});



const schema = new GraphQLSchema({
    query : RootQuery,
    mutation
});

const app = express();


app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.use('/graphql', expressGraphQL({
    schema   : schema,
    graphiql : true
}));

const server = app.listen(7779, () => console.log('GraphQL server on port ' + server.address().port));



/* Example Query

        {
            boards{
                id,
                writer,		
                title,
                content
            }
        }



        {
            board(id : "1"){
                id,
                writer,		
                title,
                content
            }
        }



        mutation{
            addBoard( writer:"aaa", title : "aaa", content : "aaa" ){
                id,
                writer,		
                title,
                content
            }
        }
        


        mutation{
            editBoard(id:"1", title : "edit title"){
                id,
                writer,
                title,
                content
            }
        }
        


        mutation{
            deleteBoard(id:"1"){
                id
            }
        }
          
*/