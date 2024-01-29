import { styled } from "styled-components";
import Flex from "./Flex";
import Svg from "./Svg";
import Paragraph from "./Paragraph";
import { useGame } from "../context/GameContext";

const StyledTurn = styled(Flex)`
  padding-inline: 1.4rem;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  background: var(--color-light-green);
  box-shadow: 0px -4px 0px 0px #10212a inset;
  border-radius: 5px;
  width: 10rem;
  /* height: 3.9rem; */
  justify-self: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-inline: 3rem;
    width: 14rem;
    justify-content: center;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    padding-inline: 1rem;

    width: 9.5rem;
  }

  @media (min-width: 1440px) {
    width: 14rem;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
  }
`;

function Turn() {
  const { currentMark } = useGame();

  return (
    <StyledTurn>
      {currentMark === "x" ? (
        <Svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7785 2.64487L13.3551 0.22153C13.0598 -0.0738435 12.5809 -0.0738435 12.2855 0.22153L8 4.50702L3.71451 0.22153C3.41914 -0.0738435 2.94024 -0.0738435 2.64487 0.22153L0.22153 2.64487C-0.0738435 2.94024 -0.0738435 3.41914 0.22153 3.71451L4.50702 8L0.22153 12.2855C-0.0738435 12.5809 -0.0738435 13.0598 0.22153 13.3551L2.64487 15.7785C2.94024 16.0738 3.41914 16.0738 3.71451 15.7785L8 11.493L12.2855 15.7785C12.5809 16.0738 13.0598 16.0738 13.3551 15.7785L15.7785 13.3551C16.0738 13.0598 16.0738 12.5809 15.7785 12.2855L11.493 8L15.7785 3.71451C16.0738 3.41914 16.0738 2.94024 15.7785 2.64487Z"
          fill="#A8BFC9"
          heightL="20px"
          widthL="20px"
        />
      ) : (
        <Svg
          width="17"
          height="17"
          viewBox="0 0 20 19"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.92593 10C5.92593 7.74995 7.74995 5.92593 10 5.92593C12.25 5.92593 14.0741 7.74995 14.0741 10C14.0741 12.25 12.25 14.0741 10 14.0741C7.74995 14.0741 5.92593 12.25 5.92593 10Z"
          fill="#A8BFC9"
          heightL="20px"
          widthL="20px"
        />
      )}
      <Paragraph>TURN</Paragraph>
    </StyledTurn>
  );
}

export default Turn;
