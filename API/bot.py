def botMove2(boardstring):
  board = list(boardstring)
  print(board)
  for i in range(len(board)):
    if(board[i]==" "):
        return i
  return -1

def botMove(board):
  brd = list(board)
  # find move number :
  move = brd.count("X")
  print("win  = "+str(checkForWin(brd)))
  print("loss  = "+str(checkForLoss(brd)))
  print("best  = "+str(bestMove(brd)))
  if(not checkForWin(brd)==-1):
    return checkForWin(brd)
  if(not checkForLoss(brd)==-1):
    return checkForLoss(brd)
  return bestMove(brd)

def checkForWin(brd):
  for i in range(3):
    # check for winning moves in horizental lines
    if(brd[i*3]==brd[i*3+1] and brd[i*3+2]==" " and brd[i*3]=="O"):
      return i*3+2
    if(brd[i*3+2]==brd[i*3+1] and brd[i*3]==" " and brd[i*3+1]=="O"):
      return i*3
    if(brd[i*3+2]==brd[i*3] and brd[i*3+1]==" " and brd[i*3]=="O"):
      return i*3+1

    # check for winning moves in vertical liens 
    if(brd[i]==brd[3+i] and brd[6+i]==" " and brd[i]=="O"):
      return 6+i
    if(brd[i+6]==brd[3+i] and brd[i]==" " and brd[i+6]=="O"):
      return i
    if(brd[i+6]==brd[i] and brd[i+3]==" " and brd[i]=="O"):
      return i+3

  # check for winning moves in diagonal lines 
  if(brd[0]==brd[8] and brd[0]=="O" and brd[4]==" "):
    return 4
  if(brd[0]==brd[4] and brd[4]=="O" and brd[8]==" "):
    return 8
  if(brd[8]==brd[4] and brd[8]=="O" and brd[0]==" "):
    return 0

  if(brd[2]==brd[6] and brd[2]=="O" and brd[4]==" "):
    return 4
  if(brd[2]==brd[4] and brd[4]=="O" and brd[6]==" "):
    return 6
  if(brd[4]==brd[6] and brd[6]=="O" and brd[2]==" "):
    return 2

  # if none, return -1
  return -1
def checkForLoss(brd):
  print(brd)
  for i in range(3):
    print("these are line " + str(i))
    print(brd[i*3]+brd[i*3+1]+brd[i*3+2])
    # check for winning moves in horizental lines
    if(brd[i*3]==brd[i*3+1] and brd[i*3+2]==" " and brd[i*3]=="X"):
      return i*3+2
    if(brd[i*3+2]==brd[i*3+1] and brd[i*3]==" " and brd[i*3+1]=="X"):
      return i*3
    if(brd[i*3+2]==brd[i*3] and brd[i*3+1]==" " and brd[i*3]=="X"):
      return i*3+1

    # check for winning moves in vertical liens 
    if(brd[i]==brd[3+i] and brd[6+i]==" " and brd[i]=="X"):
      return 6+i
    if(brd[i+6]==brd[3+i] and brd[i]==" " and brd[i+6]=="X"):
      return i
    if(brd[i+6]==brd[i] and brd[i+3]==" " and brd[i]=="X"):
      return i+3

  # check for winning moves in diagonal lines 
  if(brd[0]==brd[8] and brd[0]=="X" and brd[4]==" "):
    return 4
  if(brd[0]==brd[4] and brd[4]=="X" and brd[8]==" "):
    return 8
  if(brd[8]==brd[4] and brd[8]=="X" and brd[0]==" "):
    return 0

  if(brd[2]==brd[6] and brd[2]=="X" and brd[4]==" "):
    return 4
  if(brd[2]==brd[4] and brd[4]=="X" and brd[6]==" "):
    return 6
  if(brd[4]==brd[6] and brd[6]=="X" and brd[2]==" "):
    return 2

  # if none, return -1
  return -1

def bestMove(brd):
  # if center is open, mark center
  if(brd[4]==" "):
    return 4
  
  # if corners are open, mark corners 
  corners = {0,2,6,8}
  edges = {1,3,5,7}
  if(brd[4]=="X"):
    for i in corners:
      if(brd[i]==" "):
          return i
    for i in edges:
      if(brd[i]==" "):
        return i
  else:
    for i in edges:
      if(brd[i]==" "):
          return i
    for i in corners:
      if(brd[i]==" "):
        return i
  
  # else, mark first available edge
  