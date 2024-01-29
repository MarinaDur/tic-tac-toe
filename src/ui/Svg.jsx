import { styled } from "styled-components";

const StyledSvg = styled.svg`
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    z-index: ${(props) => props.$zIndex && `${props.$zIndex}`};
  }

  @media (min-width: 1440px) {
    width: ${(props) => (props.$widthL ? `20px` : "30px")};
    height: ${(props) => (props.$heightL ? `20px` : "30px")};
  }
`;

function Svg({
  width,
  height,
  viewBox,
  fillRule,
  clipRule,
  d,
  fill,
  widthL,
  heightL,
  zIndex,
}) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      $widthL={widthL}
      $heightL={heightL}
      $zIndex={zIndex}
    >
      <path fillRule={fillRule} clipRule={clipRule} d={d} fill={fill} />
    </StyledSvg>
  );
}

export default Svg;
