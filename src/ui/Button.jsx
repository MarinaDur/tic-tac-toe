import { css, styled } from "styled-components";

const sizes = {
  small: css`
    padding-top: 1.4rem;
    padding-bottom: 1.6rem;
    border-radius: 5px;
    width: 4.5rem;
    height: 4.5rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
      padding-top: 1.5rem;
      padding-bottom: 1.7rem;
      letter-spacing: 1px;
      border-radius: 10px;
    }
  `,
  medium: css`
    font-size: 1.6rem;
    padding-top: 1.5rem;
    padding-bottom: 1.7rem;
    letter-spacing: 1px;
    border-radius: 10px;
    @media (min-width: 768px) {
      font-size: 2rem;
      padding-top: 1.7rem;
      padding-bottom: 2.5rem;
      letter-spacing: 1.25px;
    }
  `,
  large: css`
    font-size: 2rem;
    padding-top: 1.7rem;
    padding-bottom: 2.5rem;
    letter-spacing: 1.25px;
    border-radius: 15px;
  `,
};

const colors = {
  orange: css`
    background-color: var(--color-orange);

    &:hover {
      background-color: var(--color-light-orange);
    }
  `,
  blue: css`
    background: var(--color-blue);

    &:hover {
      background-color: var(--color-light-blue);
    }
  `,
  gray: css`
    background-color: var(--color-gray);

    &:hover {
      background-color: var(--color-light-gray);
    }
  `,
};

const shadows = {
  orangeSmall: css`
    box-shadow: 0px -4px 0px 0px var(--color-shadow-orange) inset;
  `,

  orangeBig: css`
    box-shadow: 0px -8px 0px 0px var(--color-shadow-orange) inset;
  `,

  blueSmall: css`
    box-shadow: 0px -4px 0px 0px var(--color-shadow-blue) inset;
  `,

  blueBig: css`
    box-shadow: 0px -8px 0px 0px var(--color-shadow-blue) inset;
  `,

  graySmall: css`
    box-shadow: 0px -4px 0px 0px var(--color-shadow-gray) inset;
  `,

  grayBig: css`
    box-shadow: 0px -8px 0px 0px var(--color-shadow-gray) inset;
  `,
};

const Button = styled.button`
  border: none;
  font-weight: 700;
  text-align: center;
  color: var(--color-dark-green);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: 100%;

  ${(props) => sizes[props.$size]}
  ${(props) => colors[props.$color]}
  ${(props) => shadows[props.$shadow]}
`;

Button.defaultProps = {
  $color: "orange",
  $size: "medium",
  $shadow: "orangeSmall",
};

export default Button;
