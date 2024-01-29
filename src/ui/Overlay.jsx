import { keyframes, styled } from "styled-components";
import Flex from "./Flex";

const fadeInOut = keyframes`
  from {
    background: hsla(0, 0%, 0%, 0);
  }
  to {
    background: hsla(0, 0%, 0%, 0.5);
  }
`;

const StyledOverlay = styled(Flex)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 0.5);
  justify-content: center;
  z-index: 999;
  position: absolute;
  animation: ${fadeInOut} 0.8s ease;
`;

function Overlay({ children }) {
  return <StyledOverlay>{children}</StyledOverlay>;
}

export default Overlay;
