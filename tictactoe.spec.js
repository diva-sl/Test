const expect = require('chai').expect;

const T3 = require('./tictactoe');

describe('T3', function() {

  it('X Wins stupid Y', function() {
    const game = new T3.Game();
    game.moves([
      [0, 0, 'X'],
      [1, 0, 'Y'],
      [0, 1, 'X'],
      [1, 1, 'Y'],
      [0, 2, 'X']
    ]);
    expect(game.getWinner()).to.eql('X');
  });

  it('Y Wins stupid X', function() {
    const game = new T3.Game();
    game.moves([
      [0, 0, 'X'],
      [1, 0, 'Y'],
      [0, 2, 'X'],
      [1, 1, 'Y'],
      [2, 0, 'X'],
      [1, 2, 'Y']
    ]);
    expect(game.getWinner()).to.eql('Y');
  });

});

`
Tic tac toe board positions:

horizontal axis is X left to right
vertical axis is Y top to bottom
so all the coordinates in the board are placed like this:

0,0----------------->    X axis
|
|
|
|
|
v

Y axis


(0,0)    (1,0)     (2,0)
(0,1)    (1,1)     (2,1)
(0,2)    (1,2)     (2,2)

ex:

X  .  .
.  .  .
Y  .  .

in the above board, only 2 moves are done.
X played (0,0) coordinate
Y played (0,2) coordinate

ex:

X  X  X
.  .  .
Y  Y  .

in the above board, only 5 moves are done and X is victorious.
X played (0,0) coordinate
Y played (0,2) coordinate
X played (1,0) coordinate
Y played (1,2) coordinate
X played (2,0) coordinate

`