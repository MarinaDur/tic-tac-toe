import { styled } from "styled-components";
import Flex from "../ui/Flex";
import PickPlayer from "./PickPlayer";
import GameButtons from "./GameButtons";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useGame } from "../context/GameContext";

const StyledStartGame = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
  width: 88%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 460px;

  @media (min-width: 1024px) {
    width: 320px;
  }
  @media (min-width: 1280px) {
    width: 400px;
  }

  @media (min-width: 1350px) {
    width: 350px;
  }

  @media (min-width: 1440px) {
    width: 460px;
  }
`;

function StartGame() {
  const { handleStartGame } = useGame();
  return (
    <StyledStartGame>
      <Logo />
      <PickPlayer />
      <GameButtons>
        <Button
          $color="orange"
          $size="medium"
          $shadow="orangeBig"
          onClick={() => handleStartGame("cpu")}
        >
          NEW GAME (VS CPU)
        </Button>
        <Button
          $color="blue"
          $size="medium"
          $shadow="blueBig"
          onClick={() => handleStartGame("player")}
        >
          NEW GAME (VS PLAYER)
        </Button>
      </GameButtons>
    </StyledStartGame>
  );
}

export default StartGame;
