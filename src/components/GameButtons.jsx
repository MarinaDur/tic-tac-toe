import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Button from "../ui/Button";

const StyledtGameButtons = styled(Flex)`
  flex-direction: ${(props) => (props.$flex ? "row" : "column")};
  width: 100%;
  gap: 1.6rem;
  margin-top: ${(props) => (props.$margin ? `${props.$margin}` : "0")};

  @media (min-width: 768px) {
    width: ${(props) => props.$width && `${props.$width}`};
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.$widthL && `${props.$widthL}`};
  }
`;

function GameButtons({ children, flex, margin, width, widthL }) {
  return (
    <StyledtGameButtons
      $flex={flex}
      $margin={margin}
      $width={width}
      $widthL={widthL}
    >
      {children}
    </StyledtGameButtons>
  );
}

export default GameButtons;
