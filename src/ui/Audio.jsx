import { styled } from "styled-components";
import { useGame } from "../context/GameContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const StyledAudio = styled.audio``;

const StyledCon = styled.div`
  position: absolute;
  right: 0;
  top: 6.5rem;
  width: 3rem;
  height: 3rem;
  z-index: 999999;
  cursor: pointer;

  @media (min-width: 768px) {
    top: -5rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: var(--color-gray);
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  &:hover {
    color: var(--color-shadow-gray);
  }
`;

function Audio() {
  const { audioWinnerRef, handleSound, sound } = useGame();

  const icon = sound ? faVolumeHigh : faVolumeMute;

  return (
    <StyledCon onClick={handleSound}>
      <StyledIcon icon={icon} />
      <StyledAudio ref={audioWinnerRef}></StyledAudio>
    </StyledCon>
  );
}

export default Audio;
