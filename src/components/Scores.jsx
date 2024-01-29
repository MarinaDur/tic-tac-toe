import { styled } from "styled-components";
import Score from "./Score";
import { useGame } from "../context/GameContext";

const StyledScores = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  /* margin-top: 2rem; */
  width: 100%;
  justify-self: start;
  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1350px) {
    gap: 1rem;
  }

  @media (min-width: 1440px) {
    gap: 2rem;
  }
`;

function Scores() {
  const { startGame, playerMark, scores } = useGame();

  return (
    <StyledScores>
      <Score
        bg="blue"
        text={`X ${
          startGame === "player"
            ? playerMark === "x"
              ? "P1"
              : "P2"
            : playerMark === "x"
            ? "(YOU)"
            : "(CPU)"
        }`}
        num={scores.x}
      />
      <Score bg="gray" text="TIES" num={scores.ties} />
      <Score
        bg="orange"
        text={` O ${
          startGame === "player"
            ? playerMark === "o"
              ? "P1"
              : "P2"
            : playerMark === "o"
            ? "(YOU)"
            : "(CPU)"
        }`}
        num={scores.o}
      />
    </StyledScores>
  );
}

export default Scores;
