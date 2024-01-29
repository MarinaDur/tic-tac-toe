const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

export const bestSpot = (board, aiPlayer, huPlayer, player) => {
  const bestPlay = minimax(board, aiPlayer, huPlayer, player);
  return bestPlay;
};

export const emptySquares = (board) => {
  const newBoard = [...board];
  const emptyCells = newBoard.filter((cell) => !cell.marked);
  return emptyCells;
};

export const checkTie = (gameArray) => {
  const isTie = emptySquares(gameArray).length === 0;

  return isTie;
};

export function checkWin(board, player) {
  let plays = board.reduce(
    (a, e, i) => (e.marked === player ? a.concat(i) : a),
    []
  );
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every((elem) => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };

      break;
    }
  }

  return gameWon;
}

export const minimax = (newBoard, aiPlayer, huPlayer, player) => {
  const board = [...newBoard];
  const availSpots = emptySquares(board);

  if (checkWin(board, huPlayer)) {
    return { score: -10 };
  } else if (checkWin(board, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }
  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};

    move.index = availSpots[i].id;
    board[availSpots[i].id].marked = player;
    if (player === aiPlayer)
      move.score = minimax(board, aiPlayer, huPlayer, huPlayer).score;
    else move.score = minimax(board, aiPlayer, huPlayer, aiPlayer).score;
    board[availSpots[i].id].marked = false;
    if (
      (aiPlayer === player && move.score === 10) ||
      (player === huPlayer && move.score === -10)
    )
      return move;
    else moves.push(move);
  }
  let bestMove, bestScore;
  if (aiPlayer === player) {
    bestScore = -1000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    bestScore = 1000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
  return moves[bestMove];
};
