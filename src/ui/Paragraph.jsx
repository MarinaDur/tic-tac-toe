import { styled, css } from "styled-components";

const Paragraph = styled.p`
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.875px;
  font-feature-settings: "clig" off, "liga" off;
  color: var(--color-gray);

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  ${(props) =>
    props.$size === "small" &&
    css`
      color: var(--color-dark-green);
      text-align: center;
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.875px;
      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      text-align: center;
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 1px;
    `}

  ${(props) =>
    props.$opacity &&
    css`
      opacity: 0.5;
    `}
`;

export default Paragraph;
