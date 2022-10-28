import * as bot from './Bot.js';
let board = [' ',' ',' ',
                ' ',' ',' ',
                ' ',' ',' '];

function makeMove(){
    let move = bot.botMove(board)
    if(move>=0)
        registerMove(move,'O')
    }


function registerMove(move,player){
    board.splice(move, 1, player);
}

function isDone(){
    for(let i=0;i<3;i++){
        if (board[i*3]===board[i*3+1] && board[i*3]===board[i*3+2] && board[i*3]!==' ')
            return board[i]
        else if (board[i]===board[i+3] && board[i]===board[i+6] && board[i]!==' ' )
            return board[i]
    }
    if (board[0]===board[4] && board[0]===board[8] && board[0]!==' ' )
            return board[0]
    else if (board[2]===board[4] && board[2]===board[6] && board[2]!==' ' )
            return board[2]
    if(!board.includes(' '))
        return "No one"
    return false
}
export function handleMove(move){
    if(isDone())
        return JSON.stringify({board:board,winner:isDone()})
    registerMove(move,"X")
    if(isDone())
        return JSON.stringify({board:board,winner:isDone()})
    else{
        makeMove(move,"O");
        if(!isDone())
            return JSON.stringify({board:board})
        else
            return JSON.stringify({board:board,winner:isDone()})
    }
}

export function reset(){
    board=[' ',' ',' ',
    ' ',' ',' ',
    ' ',' ',' '];
}
