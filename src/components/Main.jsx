import { styled } from "styled-components";
import Flex from "../ui/Flex";

import StartGame from "./StartGame";
import Game from "./Game";
import { useGame } from "../context/GameContext";
import { useEffect } from "react";
import Results from "./Results";
import Restart from "./Restart";
import ConfettiLottie from "../ui/ConfettiLottie";
import { useLocalStorage } from "../hooks/useLocalStorage";

const StyledMain = styled(Flex)`
  min-height: 100vh;
  background: var(--color-dark-green);
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

function Main() {
  const { startGame, winner, restart } = useGame();
  const [showResults, setShowResults] = useLocalStorage(
    false,
    "timeOutResults"
  );

  useEffect(() => {
    if (winner) {
      const timeoutId = setTimeout(() => {
        setShowResults(true);
      }, 2500);

      return () => {
        setShowResults(false);
        clearTimeout(timeoutId);
      };
    }
  }, [winner, setShowResults]);

  return (
    <StyledMain>
      {winner && winner !== "tie" && startGame === "player" && (
        <ConfettiLottie />
      )}
      {showResults && <Results />}
      {restart && <Restart />}
      {startGame && <Game />}
      {!startGame && <StartGame />}
    </StyledMain>
  );
}

export default Main;
