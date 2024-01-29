import { styled } from "styled-components";
import Paragraph from "../ui/Paragraph";
import Img from "../ui/Img";
import Flex from "../ui/Flex";
import Heading from "../ui/Heading";
import GameButtons from "./GameButtons";
import Button from "../ui/Button";
import { useGame } from "../context/GameContext";
import FinalyCon from "../ui/FinalyCon";
import Overlay from "../ui/Overlay";

const StyledRound = styled(Flex)`
  gap: 1rem;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  width: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const StyledSBtn1 = styled(Button)`
  width: 30%;

  @media (min-width: 768px) {
    padding: 1.5rem 0;
    font-size: 1.6rem;
    border-radius: 10px;
    width: 35%;
  }
`;

const StyledLBtn2 = styled(Button)`
  width: 70%;
  @media (min-width: 768px) {
    padding: 1.5rem 0;
    font-size: 1.6rem;
    border-radius: 10px;
    width: 65%;
  }
`;

function Results() {
  const { winner, playerMark, handleQuit, handleAnotherRound, startGame } =
    useGame();

  const wins =
    playerMark === winner && startGame === "player"
      ? "PLAYER 1 WINS!"
      : winner === "tie"
      ? null
      : playerMark !== winner && startGame === "player"
      ? "PLAYER 2 WINS!"
      : playerMark === winner && startGame === "cpu"
      ? "YOU WON!"
      : playerMark !== winner && startGame === "cpu"
      ? "OH NO, YOU LOST..."
      : "";
  return (
    <Overlay>
      <FinalyCon>
        {wins && <Paragraph>{wins}</Paragraph>}
        <StyledRound>
          {wins &&
            (winner === "x" ? (
              <Img
                src="icon-x.svg"
                alt="mark"
                $width="3rem"
                $width768="6.4rem"
              />
            ) : (
              <Img
                src="icon-o.svg"
                alt="mark"
                $width="3rem"
                $width768="6.4rem"
              />
            ))}
          <Heading
            as="h2"
            $cl={winner === "x" ? "blue" : winner === "o" ? "orange" : "gray"}
          >
            {wins ? "TAKES THE ROUND" : "ROUND TIED"}
          </Heading>
        </StyledRound>
        <GameButtons flex="row" width="33%" widthL="20%">
          <StyledSBtn1
            $size="medium"
            $color="gray"
            $shadow="graySmall"
            onClick={handleQuit}
          >
            QUIT
          </StyledSBtn1>
          <StyledLBtn2
            $size="medium"
            $color="orange"
            $shadow="orangeSmall"
            onClick={handleAnotherRound}
          >
            NEXT ROUND
          </StyledLBtn2>
        </GameButtons>
      </FinalyCon>
    </Overlay>
  );
}

export default Results;
