import { keyframes, styled } from "styled-components";
import Flex from "./Flex";

const fadeInOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    background: 1;
  }
`;

const StyledFinalyCon = styled(Flex)`
  width: 100%;
  background: var(--color-light-green);
  flex-direction: column;
  opacity: 1;

  padding: 4rem;
  min-height: 22.8rem;
  justify-content: center;
  animation: ${fadeInOut} 0.8s ease;

  @media (min-width: 768px) {
    min-height: 26.6rem;
  }
`;

function FinalyCon({ children }) {
  return <StyledFinalyCon>{children}</StyledFinalyCon>;
}

export default FinalyCon;
