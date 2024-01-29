import { styled, css } from "styled-components";
import { useGame } from "../context/GameContext";

const StyledCell = styled.div`
  background: ${(props) =>
      props.$winnerMark && props.$marked === "x"
        ? "var(--color-blue)"
        : props.$winnerMark && props.$marked === "o"
        ? "var(--color-orange)"
        : "var(--color-light-green)"}
    ${(props) =>
      props.$marked === "x" && !props.$winnerMark
        ? "url('icon-x.svg')"
        : props.$marked === "x" && props.$winnerMark
        ? "url('icon-x-winner.svg')"
        : props.$marked === "o" && !props.$winnerMark
        ? "url('icon-o.svg')"
        : props.$marked === "o" && props.$winnerMark
        ? "url('icon-o-winner.svg')"
        : ""}
    no-repeat center;
  background-size: 40%;
  background-position: 50% 40%;
  /* width: 9.6rem; */
  height: 9.6rem;
  border-radius: 10px;
  box-shadow: 0px -8px 0px 0px var(--color-shadow-green) inset;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 14rem;
    border-radius: 15px;
    background-size: 47%;
    background-position: 50% 50%;
  }

  @media (min-width: 1024px) {
    height: 9rem;
  }

  @media (min-width: 1280px) {
    height: 12rem;
    border-radius: 15px;
  }

  @media (min-width: 1350px) {
    height: 11rem;
  }

  @media (min-width: 1440px) {
    height: 14rem;
  }

  &:hover {
    ${(props) =>
      !props.$marked &&
      !props.$winner &&
      (!props.$player || (props.$isTurn && props.$player)) &&
      css`
        background: var(--color-light-green)
          ${(props) =>
            props.$currentMark &&
            `url("icon-${props.$currentMark}-outline.svg")`}
          no-repeat center;
        background-size: 40%;
        background-position: 50% 40%;
      `}

    @media (min-width: 768px) {
      background-size: 47%;
      background-position: 50% 50%;
    }
  }
`;

function Cell({ cell }) {
  const { id, marked } = cell;
  const {
    handleTurn,
    playerMark,
    currentMark,
    startGame,
    audioRef,
    winningCombo,
    winner,
  } = useGame();

  const whoPlays =
    marked === false &&
    !winner &&
    (startGame === "player" || currentMark === playerMark)
      ? async () => {
          handleTurn(id, playerMark);
        }
      : null;
  const winnerMark = winningCombo.includes(id);

  return (
    <StyledCell
      $currentMark={currentMark}
      $player={startGame === "cpu"}
      $isTurn={playerMark === currentMark}
      $marked={marked}
      onClick={whoPlays}
      $winnerMark={winnerMark}
      $winner={winner}
    >
      <audio ref={audioRef}></audio>
    </StyledCell>
  );
}

export default Cell;
