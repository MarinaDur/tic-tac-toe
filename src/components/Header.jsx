import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Turn from "../ui/Turn";
import Img from "../ui/Img";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Audio from "../ui/Audio";
import { useGame } from "../context/GameContext";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2.4rem;
  /* padding-bottom: 6.4rem; */
  position: relative;
  width: 100%;
  justify-self: center;
  align-self: end;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const StyledXOCon = styled(Flex)`
  gap: 0.7rem;
`;

const StyledButton = styled(Button)`
  justify-self: right;
`;

function Header() {
  const { handleRestartBtn } = useGame();
  return (
    <StyledHeader>
      <StyledXOCon>
        <Logo />
      </StyledXOCon>
      <Turn />
      <StyledButton
        $size="small"
        $color="gray"
        $shadow="graySmall"
        onClick={handleRestartBtn}
      >
        <Img
          src="icon-restart.svg"
          alt="restart"
          $width="1.6rem"
          $width768="1.8rem"
        />
      </StyledButton>
      <Audio />
    </StyledHeader>
  );
}

export default Header;
