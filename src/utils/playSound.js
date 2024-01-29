export const checkAndPlaySounds = (
  winner,
  sound,
  playerMark,
  audioWinnerRef,
  soundPlayed,
  setSoundPlayed,
  startGame
) => {
  if (!sound) {
    audioWinnerRef.current.src = "";
    audioWinnerRef.current?.pause();
    return;
  }
  if (
    ((startGame === "player" && winner !== "tie") ||
      (startGame === "cpu" && winner === playerMark)) &&
    !soundPlayed
  ) {
    audioWinnerRef.current.src = "winner-music.mp3";
    audioWinnerRef.current.play();
  } else if (
    winner !== playerMark &&
    winner !== "tie" &&
    winner &&
    !soundPlayed
  ) {
    audioWinnerRef.current.src = "failed-sound.mp3";
    audioWinnerRef.current.play();
  } else if (winner === "tie" && !soundPlayed) {
    audioWinnerRef.current.src = "tie-sound.mp3";
    audioWinnerRef.current.play();
  }
  setSoundPlayed(true);
};
