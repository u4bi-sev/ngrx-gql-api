export interface BoardModel{
    id?     : string;
    writer?  : string;
    title?   : string;
    content? : string;
}

export interface BoardServiceModel{
    getBoards();
    getBoard( id : string);
    addBoard( board : BoardModel);
    editBoard( id : string, board : BoardModel);
    deleteBoard( id : string);
}