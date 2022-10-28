import bot
import json
from flask import jsonify

# def readGameJson():
#     data = firebase.getGameJson()
#     return data

# def writeGameJson(data):
#     firebase.writeGameJson(data)

def getBoard(game_id):
    return SESSIONS[str(game_id)]

def setBoard(game_id,new_board):
    SESSIONS[str(game_id)]=new_board

# uses first bot move so far
def makeMove(game_id,player):
    board = getBoard(game_id)
    move = bot.botMove(board)
    if(move>=0):
        registerMove(game_id,move,player)


def registerMove(game_id,move,player):
    board = list(getBoard(game_id))
    board[move]=player
    setBoard(game_id,''.join(board))

def isDone(game_id):
    board = list(getBoard(game_id))
    for i in range(3):
        if (board[i*3]==board[i*3+1] and board[i*3]==board[i*3+2] and board[i*3]!=" "):
            print(""+str(i*3)+" "+str(i*3+1)+" "+str(i*3+2))
            return board[i]
        elif (board[i]==board[i+3] and board[i]==board[i+6] and board[i]!=" " ):
            print(""+str(i)+" "+str(i+3)+" "+str(i+6))
            return board[i]
    if (board[0]==board[4] and board[0]==board[8] and board[0]!=" " ):
            return board[0]
    elif (board[2]==board[4] and board[2]==board[6] and board[2]!=" " ):
            return board[2]
    if(board.count(" ")==0):
        return "No one"
    return False

def handleNetwork(game_id,move):
    print("status " + str(isDone(game_id)))
    if(isDone(game_id)):
        return jsonify(board=getBoard(game_id),winner=isDone(game_id))
    registerMove(game_id,move,"X")
    if(isDone(game_id)):
        return jsonify(board=getBoard(game_id),winner=isDone(game_id))
    else :
        makeMove(game_id,"O")
        if(not isDone(game_id)):
            return jsonify(board=getBoard(game_id))
        else:
            return jsonify(board=getBoard(game_id),winner=isDone(game_id))

def createGame():
    counter = SESSIONS['count']
    counter = counter + 1
    SESSIONS['count']=counter
    SESSIONS[str(counter)]="         "
    return jsonify(id=counter)

SESSIONS = {}
SESSIONS['count'] = 1