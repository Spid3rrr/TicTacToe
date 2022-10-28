export function botMove(brd){
  if(checkForWin(brd)!==-1)
    return checkForWin(brd);
  if(checkForLoss(brd)!==-1)
    return checkForLoss(brd);
  return bestMove(brd);
}

export function checkForWin(brd){
  for(let i=0;i<3;i++){
    
    // check for winning moves in horizental lines
    if(brd[i*3]===brd[i*3+1] && brd[i*3+2]===" " && brd[i*3]==="O")
      return i*3+2
    if(brd[i*3+2]===brd[i*3+1] && brd[i*3]===" " && brd[i*3+1]==="O")
      return i*3
    if(brd[i*3+2]===brd[i*3] && brd[i*3+1]===" " && brd[i*3]==="O")
      return i*3+1

    // check for winning moves in vertical liens 
    if(brd[i]===brd[3+i] && brd[6+i]===" " && brd[i]==="O")
      return 6+i
    if(brd[i+6]===brd[3+i] && brd[i]===" " && brd[i+6]==="O")
      return i
    if(brd[i+6]===brd[i] && brd[i+3]===" " && brd[i]==="O")
      return i+3
    }
  // check for winning moves in diagonal lines 
  if(brd[0]===brd[8] && brd[0]==="O" && brd[4]===" ")
    return 4;
  if(brd[0]===brd[4] && brd[4]==="O" && brd[8]===" ")
    return 8;
  if(brd[8]===brd[4] && brd[8]==="O" && brd[0]===" ")
    return 0;

  if(brd[2]===brd[6] && brd[2]==="O" && brd[4]===" ")
    return 4;
  if(brd[2]===brd[4] && brd[4]==="O" && brd[6]===" ")
    return 6;
  if(brd[4]===brd[6] && brd[6]==="O" && brd[2]===" ")
    return 2;

  // if none, return -1
  return -1;
}

export function checkForLoss(brd){
  for(let i=0;i<3;i++){
    // check for winning moves in horizental lines
    if(brd[i*3]===brd[i*3+1] && brd[i*3+2]===" " && brd[i*3]==="X")
      return i*3+2;
    if(brd[i*3+2]===brd[i*3+1] && brd[i*3]===" " && brd[i*3+1]==="X")
      return i*3;
    if(brd[i*3+2]===brd[i*3] && brd[i*3+1]===" " && brd[i*3]==="X")
      return i*3+1;

    // check for winning moves in vertical liens 
    if(brd[i]===brd[3+i] && brd[6+i]===" " && brd[i]==="X")
      return 6+i;
    if(brd[i+6]===brd[3+i] && brd[i]===" " && brd[i+6]==="X")
      return i;
    if(brd[i+6]===brd[i] && brd[i+3]===" " && brd[i]==="X")
      return i+3;
    }
  // check for winning moves in diagonal lines 
  if(brd[0]===brd[8] && brd[0]==="X" && brd[4]===" ")
    return 4;
  if(brd[0]===brd[4] && brd[4]==="X" && brd[8]===" ")
    return 8;
  if(brd[8]===brd[4] && brd[8]==="X" && brd[0]===" ")
    return 0;

  if(brd[2]===brd[6] && brd[2]==="X" && brd[4]===" ")
    return 4;
  if(brd[2]===brd[4] && brd[4]==="X" && brd[6]===" ")
    return 6;
  if(brd[4]===brd[6] && brd[6]==="X" && brd[2]===" ")
    return 2;

  // if none, return -1
  return -1
}

export function bestMove(brd){
  // if center is open, mark center
  if(brd[4]===" ")
    return 4;
  // prevent triangle formations
  if(brd[3]+brd[6]+brd[7]==="X X")
    return 6;
  if(brd[5]+brd[8]+brd[7]==="X X")
    return 8;
  if(brd[3]+brd[0]+brd[1]==="X X")
    return 0;
  if(brd[1]+brd[2]+brd[5]==="X X")
    return 2;
  // if corners are open, mark corners 
  const corners = [0,2,6,8];
  const edges = [1,3,5,7];
  if(brd[4]==="X")
    for (let i of corners)
      if(brd[i]===" ")
          return i
    for (let i of edges)
      if(brd[i]===" ")
        return i
    else{
        for (let i of edges)
        if(brd[i]===" ")
            return i
        for (let i of corners)
        if(brd[i]===" ")
            return i
    }
}

