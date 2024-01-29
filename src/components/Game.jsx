import { styled } from "styled-components";
import Cell from "./Cell";
import Header from "./Header";
import Scores from "./Scores";
import { useGame } from "../context/GameContext";

const StyledGame = styled.div`
  width: 88%;
  height: 100vh;
  grid-template-rows: 10rem calc(100% - 16rem);
  flex-direction: column;
  max-width: 460px;
  display: grid;
  align-items: start;

  @media (min-width: 768px) {
    gap: 2rem;
    grid-template-rows: auto;
    align-content: center;
  }

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

const StyledCells = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-self: center;
  align-self: center;
`;

const StyledCon = styled.div`
  display: grid;
  align-self: center;
  gap: 2rem;
  grid-template-rows: 1fr auto;
`;
function Game() {
  const { game } = useGame();
  return (
    <StyledGame>
      <Header />
      <StyledCon>
        <StyledCells>
          {game.map((cells) =>
            cells.map((cell, index) => <Cell key={cell.id} cell={cell} />)
          )}
        </StyledCells>
        <Scores />
      </StyledCon>
    </StyledGame>
  );
}

export default Game;
