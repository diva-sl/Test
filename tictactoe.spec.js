const expect = require('chai').expect;

const T3 = require('./tictactoe');

describe('Tic tac toe', function() {

  it('should evaluate vertical winning position', function() {
    const game1 = new T3.Game();
    `|A|B| |
     |A|B| |
     |A| | |`
    game1.moves([
      [0, 0, 'A'],
      [1, 0, 'B'],
      [0, 1, 'A'],
      [1, 1, 'B'],
      [0, 2, 'A']
    ]);
    expect(game1.getWinner()).to.eql('A');

    const game2 = new T3.Game();
    `|A|B|A|
     | |B| |
     |A|B| |`
    game2.moves([
      [0, 0, 'A'],
      [1, 0, 'B'],
      [0, 2, 'A'],
      [1, 1, 'B'],
      [2, 0, 'A'],
      [1, 2, 'B']
    ]);
    expect(game2.getWinner()).to.eql('B');
  });

  it('should evaluate horizontal winning position', function() {
    const game1 = new T3.Game();
    `|B|B| |
     | |B|A|
     |A|A|A|`
    game1.moves([
      [0, 2, 'A'],
      [0, 0, 'B'],
      [1, 2, 'A'],
      [1, 0, 'B'],
      [2, 1, 'A'],
      [1, 1, 'B'],
      [2, 2, 'A'],
    ]);
    expect(game1.getWinner()).to.eql('A');

    const game2 = new T3.Game();
    `|A| | |
     |B|B|B|
     | |A|A|`
    game2.moves([
      [0, 0, 'A'],
      [0, 1, 'B'],
      [1, 2, 'A'],
      [1, 1, 'B'],
      [2, 2, 'A'],
      [2, 1, 'B'],
    ]);
    expect(game2.getWinner()).to.eql('B');
  });

  it('should evaluate diagonal winning position', function() {
    const game1 = new T3.Game();
    `|B| | |
     |A|B|A|
     | |A|B|`
    game1.moves([
      [0, 1, 'A'],
      [0, 0, 'B'],
      [1, 2, 'A'],
      [1, 1, 'B'],
      [2, 1, 'A'],
      [2, 2, 'B'],
    ]);
    expect(game1.getWinner()).to.eql('B');

    const game2 = new T3.Game();
    `| | |B|
     |A|B|A|
     |B|A| |`
    game2.moves([
      [0, 1, 'A'],
      [0, 2, 'B'],
      [1, 2, 'A'],
      [1, 1, 'B'],
      [2, 1, 'A'],
      [2, 0, 'B'],
    ]);
    expect(game2.getWinner()).to.eql('B');
  });

  it('should be able to load an old game and find the winner', function() {
    const game1 = new T3.Game();
    game1.load(
     `--B
      ABA
      BA-`
    );
    expect(game1.getWinner()).to.eql('B');

    const game2 = new T3.Game();
    game2.load(
     `A--
      BAB
      BAA`
    );
    expect(game2.getWinner()).to.eql('A');
  });

  it('should get the game state as text', function() {
    const game1 = new T3.Game();
    game1.moves([
      [0, 1, 'A'],
      [0, 2, 'B'],
      [1, 2, 'A'],
      [1, 1, 'B'],
      [2, 1, 'A'],
      [2, 0, 'B'],
    ]);
    const expected =
    `--B
     ABA
     BA-`.replace(/\s+/g, '\n');

    expect(game1.getState()).to.eql(expected);
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
