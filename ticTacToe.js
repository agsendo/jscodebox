/*
TASK: Given are three arrays. Each array represents a line from the game Tic Tac Toe.
One player has 'X' as character and the other 'O'.
Return true if a player has won the game. If no player has won, return 'Tie'.
*/

/*
SOLUTION: Put the lines in an array to contain the full game. Then, iterate through the array and check if the same elements ('X' or 'O')
are lined vertically, 
*/


function solveTicTacToe(line1, line2, line3) {
    let lines = [line1, line2, line3];

    // horizontally
    for (let l in lines) {
        if ((lines[l][0][0] == lines[l][0][1] && lines[l][0][1] == lines[l][0][2]) && (lines[l][0][0] == 'X' || lines[l][0][0] == 'O')) {
            return true;
        }
    }
    // vertically
    for (let i = 0; i < 3; i += 1) {
         if ((line1[0][i] == line2[0][i] && line2[0][i] == line3[0][i]) && (line3[0][i] == 'X' || line3[0][i] == 'O')) {
             return true;
        }
    }
    // diagonally
    if (line1[0][0] == line2[0][1] && line2[0][1] == line3[0][2]) {
        return true;
    }
    if (line1[0][2] == line2[0][1] && line2[0][1] == line3[0][0]) {
        return true;
    }
    return 'Tie';
}


/*
TEST CASES:
solveTicTacToe(
  ['XOX'],
  ['XXX'],
  ['OXO']
)
true

solveTicTacToe(
  ['OXO'],
  ['XOO'],
  ['XOX']
)
'Tie'

solveTicTacToe(
  ['O-X'],
  ['-XO'],
  ['OOX']
)
'Tie'

solveTicTacToe(
  ['OXX'],
  ['XOO'],
  ['XOO']
)
true

solveTicTacToe(
  ['-O-'],
  ['-OX'],
  ['-O-'])
true
*/
