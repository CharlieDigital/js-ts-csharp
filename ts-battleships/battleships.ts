/**
* The battleships problem requires counting the number of battleships
* on a board. See boards at the end for examples.
*
* - The smallest battleship has size 1.
* - Battleships can only be horizontal or vertical
* - Battleships do not touch
*
* This solution demonstrates an approach to solving it using a recursive
* local function.
*/

const log = (message: any) => console.log(message);

const testCountShips = (board: number[][]) => {
  const width = board.length;
  const height = board[0].length;

  log(`Board is ${width} by ${height}`);

  // Just an extra line so things line up :)

  // Inner function closure
  const countShips = (x: number, y: number, total: number): number => {
    if (x > width - 1 && y < height) {
      x = 0;
      y++;
    }

    if (y > height - 1) {
      return total;
    }

    if (board[x][y] == 1) {
      board[x][y] = 0;
      total++;

      for (let i = x + 1; i < width; i++) {
        if (board[i][y] == 0) {
          x = i - 1; // Skip ahead?
          break;
        }

        board[i][y] = 0;
      }

      for (let i = y + 1; i < height; i++) {
        if (board[x][i] == 0) {
          break;
        }
        board[x][i] = 0;
      }
    }

    // We found a zero; keep going across.
    return countShips(x + 1, y, total);
  };

  return countShips(0, 0, 0);
}

const expect = (board: number[][], expected: number) => {
  const actual = testCountShips(board);

  if (actual !== expected) {
    log(`Expected ${expected} but got ${actual}`);
  }
  else {
    log(`Passed with ${expected}`);
  }
}

// Sample boards
const board1 = [
  [1,1,1,0],
  [0,0,0,1],
  [1,0,0,1],
  [1,0,0,0],
];

expect(board1, 3);

const board2 = [
  [1,1,1,0,1],
  [0,0,0,1,0],
  [1,0,0,1,0],
  [1,0,0,0,0],
  [0,0,0,1,1]
];

expect(board2, 5);

const board3 = [
  [1,0,1,0,1],
  [0,1,0,1,0],
  [1,0,1,0,1],
  [0,1,0,1,0],
  [1,0,1,0,1]
];

expect(board3, 13);