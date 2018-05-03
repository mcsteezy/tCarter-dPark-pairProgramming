/**
 * @param {string} moves
 * @return {boolean}
 */

  /*
    Input value - One of the moves as a string
    Output - Return true if circle, if not return false
    Notes: A result of 0 is a circle thus true
  */
var judgeCircle = function(moves) {
    let x = 0;  // Establish variable x to 0
    let y = 0;  // Establish variable y to 0 
    
    for (let i = 0; i < moves.length; i++) {    // for each element in moves
        if (moves[i] === 'R') {                 // if element is 'R'
            x++;                                // increment x + 1
        } else if (moves[i] === 'L') {          // Else If L
            x--;                                // increment x - 1
        } else if (moves[i] === 'U') {          // Else If U
            y++;                                // increment y + 1
        } else if (moves[i] === 'D') {          // Else If D
            y--;                                // increment y - 1
        }
    }
    if (x === 0 && y === 0) {   // if x and y are 0
        return true;            // return true otherwise return false
    } else {
        return false;
    }
};

/*
    TRANSFORMATION ------
    Input - "UD", "LL"
    ---------
    Iterate |   currentChar  |  currentPosX   |  currentPosY   |  changedX : changedY |
    1              'U'                0                0       |      0          1    |
    2              'D'                0                1       |      0          0    |
    ------
    1              'L'                0                0             -1          0
    2              'L'               -1                0             -2          0    |
    --------
    1. Return - Value True is circle
    2. Return - value False is not a circle
    -------
*/