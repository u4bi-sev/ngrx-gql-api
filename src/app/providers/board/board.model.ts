export interface BoardModel{
    id?     : string | number;
    writer?  : string;
    title?   : string;
    content? : string;
}

export interface BoardServiceModel{
    getBoards();
    getBoard( id : string | number);
    addBoard( board : BoardModel);
    editBoard( id : string | number, board : BoardModel);
    deleteBoard( id : string | number);
}