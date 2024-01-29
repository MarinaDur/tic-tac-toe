import { css, styled } from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gray);
  font-feature-settings: "clig" off, "liga" off;
  line-height: normal;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
      letter-spacing: 2.5px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      letter-spacing: 1.5px;
      color: ${(props) => props.$cl && `var(--color-${props.$cl})`};
      @media (min-width: 768px) {
        font-size: 4rem;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      letter-spacing: 1.25px;
      color: ${(props) => props.$cl && `var(--color-${props.$cl})`};
      @media (min-width: 768px) {
        font-size: 2.4rem;
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.6rem;
      letter-spacing: 1px;
    `}
`;

export default Heading;
