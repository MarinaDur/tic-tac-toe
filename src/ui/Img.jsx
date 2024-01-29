import { styled } from "styled-components";

const Img = styled.img`
  width: ${(props) => (props.$width ? `${props.$width}` : "100%")};
  aspect-ratio: 1;

  @media (min-width: 768px) {
    width: ${(props) => (props.$width768 ? `${props.$width768}` : "100%")};
  }
`;

export default Img;
