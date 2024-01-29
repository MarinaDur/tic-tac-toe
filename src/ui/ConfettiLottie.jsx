import React, { useState } from "react";
import Lottie from "react-lottie";
import Confetti from "../animations/confetti.json";

import { styled, css } from "styled-components";

const StyledConfettiLottie = styled.div`
  position: absolute;
  z-index: 999;
  height: 95%;
  top: 0;
`;

function ConfettiLottie() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <StyledConfettiLottie>
      <Lottie options={defaultOptions}>Confetti</Lottie>;
    </StyledConfettiLottie>
  );
}

export default ConfettiLottie;
