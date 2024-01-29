import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import PickPlayerMark from "./PickPlayerMark";

const StyledPickPlayer = styled(Flex)`
  width: 100%;
  padding: 2.4rem;
  flex-direction: column;
  background: var(--color-light-green);
  box-shadow: 0px -8px 0px 0px var(--color-shadow-green) inset;
  border-radius: 15px;
  gap: 2.4rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

function PickPlayer() {
  return (
    <StyledPickPlayer>
      <Paragraph $size="medium">PICK PLAYER'S 1'S MARK</Paragraph>
      <PickPlayerMark />
      <Paragraph $opacity="true">REMEMBER: X GOES FIRST</Paragraph>
    </StyledPickPlayer>
  );
}

export default PickPlayer;
