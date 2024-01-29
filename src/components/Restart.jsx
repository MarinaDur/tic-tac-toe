import { styled } from "styled-components";
import Heading from "../ui/Heading";
import GameButtons from "./GameButtons";
import Button from "../ui/Button";
import FinalyCon from "../ui/FinalyCon";
import Overlay from "../ui/Overlay";
import { useGame } from "../context/GameContext";

const StyledLBtn = styled(Button)`
  @media (min-width: 768px) {
    padding: 1.5rem 0;
    font-size: 1.6rem;
    border-radius: 10px;
  }
`;

function Restart() {
  const { handleResetGame, handleCancelReset } = useGame();
  return (
    <Overlay>
      <FinalyCon>
        <Heading as="h2" $cl="gray">
          RESTART GAME?
        </Heading>
        <GameButtons flex="row" margin="2.4rem" width="45%" widthL="22%">
          <StyledLBtn
            $size="medium"
            $color="gray"
            $shadow="graySmall"
            onClick={handleCancelReset}
          >
            NO, CANCEL
          </StyledLBtn>
          <StyledLBtn
            $size="medium"
            $color="orange"
            $shadow="orangeSmall"
            onClick={handleResetGame}
          >
            YES, RESTART
          </StyledLBtn>
        </GameButtons>
      </FinalyCon>
    </Overlay>
  );
}

export default Restart;
