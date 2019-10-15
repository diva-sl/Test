const expect = require('chai').expect;

const T3 = require('./tictactoe');

describe('T3', function() {

  it('A Wins stupid B', function() {
    const game = new T3.Game();
    game.moves([
      [0, 0, 'A'],
      [1, 0, 'B'],
      [0, 1, 'A'],
      [1, 1, 'B'],
      [0, 2, 'A']
    ]);
    expect(game.getWinner()).to.eql('A');
  });

  it('B Wins stupid A', function() {
    const game = new T3.Game();
    game.moves([
      [0, 0, 'A'],
      [1, 0, 'B'],
      [0, 2, 'A'],
      [1, 1, 'B'],
      [2, 0, 'A'],
      [1, 2, 'B']
    ]);
    expect(game.getWinner()).to.eql('B');
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

A  .  .
.  .  .
B  .  .

in the above board, only 2 moves are done.
A played (0,0) coordinate
B played (0,2) coordinate

ex:

A  A  A
.  .  .
B  B  .

in the above board, only 5 moves are done and A is victorious.
A played (0,0) coordinate
B played (0,2) coordinate
A played (1,0) coordinate
B played (1,2) coordinate
A played (2,0) coordinate

`
