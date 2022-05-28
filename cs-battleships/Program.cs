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

// Alias to simplify usage.
var log = (object message) => Console.WriteLine(message);

var TestCountShips = int (int[,] board) => {
  var width = board.GetLength(0);
  var height = board.GetLength(1);

  log($"Board is {width} by {height}");

  Func<int, int, int, int> CountShips = null;

  // Local function within lambda function we use for recursion
  CountShips = (int x, int y, int total) => {
    if (x > width - 1 && y < height) {
      x = 0;
      y++;
    }

    if (y > height - 1) {
      return total;
    }

    if (board[x, y] == 1) {
      board[x, y] = 0;
      total++;

      for (int i = x + 1; i < width; i++) {
        if (board[i, y] == 0) {
          x = i - 1; // Skip ahead?
          break;
        }

        board[i, y] = 0;
      }

      for (int i = y + 1; i < height; i++) {
        if (board[x, i] == 0) {
          break;
        }
        board[x, i] = 0;
      }
    }

    // We found a zero; keep going across.
    return CountShips(x + 1, y, total);
  };

  return CountShips(0, 0, 0);
};

// Test function
var Expect = (int[,] board, int expected) => {
  var actual = TestCountShips(board);

  if(actual != expected) {
    log($"Expected {expected} but got {actual}");
  }
  else {
    log($"Passed with {expected}.");
  }
};

// Sample boards
var board1 = new int[4,4] {
  {1,1,1,0},
  {0,0,0,1},
  {1,0,0,1},
  {1,0,0,0},
};

Expect(board1, 3);

var board2 = new int[5,5] {
  {1,1,1,0,1},
  {0,0,0,1,0},
  {1,0,0,1,0},
  {1,0,0,0,0},
  {0,0,0,1,1}
};

Expect(board2, 5);

var board3 = new int[5,5] {
  {1,0,1,0,1},
  {0,1,0,1,0},
  {1,0,1,0,1},
  {0,1,0,1,0},
  {1,0,1,0,1}
};

Expect(board3, 13);
