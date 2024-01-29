import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { bestSpot, checkTie } from "../utils/minimax";
import { checkAndPlaySounds } from "../utils/playSound";
import { useLocalStorage } from "../hooks/useLocalStorage";

const gameObj = [
  [
    { id: 0, marked: false },
    { id: 1, marked: false },
    { id: 2, marked: false },
  ],
  [
    { id: 3, marked: false },
    { id: 4, marked: false },
    { id: 5, marked: false },
  ],
  [
    { id: 6, marked: false },
    { id: 7, marked: false },
    { id: 8, marked: false },
  ],
];

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

const GameContext = createContext();

function GameProvider({ children }) {
  const [game, setGame] = useLocalStorage(gameObj, "gameState");
  const [startGame, setStartGame] = useLocalStorage(false, "isGameStarted");
  const [playerMark, setPlayerMark] = useLocalStorage("x", "playerMark");
  const [currentMark, setCurrentMark] = useLocalStorage("x", "currentMark");
  const [winner, setWinner] = useLocalStorage(null, "winner");
  const [scores, setScores] = useLocalStorage(
    { x: 0, ties: 0, o: 0 },
    "scores"
  );
  const [winningCombo, setWinningCombo] = useLocalStorage([], "winningCombo");
  const [restart, setRestart] = useLocalStorage(false, "restart");
  const [sound, setSound] = useLocalStorage(true, "sound");
  const [soundPlayed, setSoundPlayed] = useLocalStorage(false, "soundPlayed");
  const [turn, setTurn] = useLocalStorage("x", "turn");

  const audioRef = useRef(null);
  const audioWinnerRef = useRef(null);

  const playSound = useCallback(
    async (mark) => {
      if (sound) {
        audioRef.current.src =
          mark === currentMark && mark === playerMark
            ? "player.mp3"
            : "opponent.mp3";
        await audioRef.current.play();
      } else {
        return;
      }
    },
    [currentMark, playerMark, sound]
  );

  const handleTurn = useCallback(
    async (id, mark) => {
      await playSound(mark);
      setGame((prev) =>
        prev.map((arr) =>
          arr.map((obj) => {
            return id === obj.id && !obj.marked
              ? { ...obj, marked: currentMark }
              : obj;
          })
        )
      );

      setCurrentMark((prev) => (prev === "x" ? "o" : "x"));
    },
    [currentMark, playSound, setGame, setCurrentMark]
  );

  const checkForWin = useCallback(
    (board) => {
      const originBoard = board.flat().map((cell) => cell.marked);
      const player = currentMark === "x" ? "o" : "x";
      let plays = originBoard.reduce(
        (a, mark, i) => (mark === player ? a.concat(i) : a),
        []
      );
      let winOccurred = false;

      for (let [_, win] of winCombos.entries()) {
        if (win.every((elem) => plays.indexOf(elem) > -1)) {
          setWinner(player);
          setWinningCombo(win);
          setScores((score) => ({
            ...score,
            [player]: score[player] + 1,
          }));
          winOccurred = true;
          break;
        }
      }
      if (!winOccurred) {
        if (checkTie(board.flat())) {
          setWinner("tie");
          setScores((score) => ({
            ...score,
            ties: score.ties + 1,
          }));
        }
      }
    },
    [currentMark, setScores, setWinner, setWinningCombo]
  );

  function handleRestartBtn() {
    setRestart(true);
  }

  function handleResetGame() {
    setGame(gameObj);
    setRestart(false);
  }

  function handleCancelReset() {
    setRestart(false);
  }

  function clear() {
    setCurrentMark("x");
    setWinningCombo([]);
    setWinner(null);
    setGame(gameObj);
  }

  function handleQuit() {
    clear();
    setPlayerMark("x");
    setStartGame(false);
    setScores({ x: 0, ties: 0, o: 0 });
  }

  function handleAnotherRound() {
    clear();
    setCurrentMark((prev) => (turn === "x" ? "o" : "x"));
    setTurn((prev) => (prev === "x" ? "o" : "x"));
  }

  function handleStartGame(player) {
    setStartGame(player);
  }

  function handlePickMark(mark) {
    setPlayerMark(mark);
  }

  function handleSound() {
    setSound((prev) => (prev === true ? false : true));
  }

  useEffect(() => {
    if (!winner) {
      checkForWin(game);
      setSoundPlayed(false);
    } else {
      checkAndPlaySounds(
        winner,
        sound,
        playerMark,
        audioWinnerRef,
        soundPlayed,
        setSoundPlayed,
        startGame
      );
    }
  }, [
    checkForWin,
    winner,
    startGame,
    sound,
    playerMark,
    soundPlayed,
    setSoundPlayed,
    scores,
    setScores,
    game,
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (
        startGame === "cpu" &&
        currentMark !== playerMark &&
        winner === null
      ) {
        const newBoard = game.flat();
        const aiPlayer = playerMark === "x" ? "o" : "x";
        const bestMove = bestSpot(newBoard, aiPlayer, playerMark, aiPlayer);
        if (bestMove && bestMove.hasOwnProperty("index")) {
          handleTurn(bestMove.index, aiPlayer);
        }
      }
    }, 200);
  }, [currentMark, playerMark, startGame, winner, game, handleTurn]);

  return (
    <GameContext.Provider
      value={{
        game,
        handleTurn,
        handleStartGame,
        startGame,
        handlePickMark,
        playerMark,
        currentMark,
        winner,
        handleQuit,
        handleAnotherRound,
        scores,
        audioRef,
        winningCombo,
        audioWinnerRef,
        handleRestartBtn,
        restart,
        handleResetGame,
        handleCancelReset,
        handleSound,
        sound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext was used outside of the GameProvider");
  return context;
}

export { GameProvider, useGame };
