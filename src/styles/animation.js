import { keyframes, css } from "styled-components";

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
  `;
const fadeIn = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;
};

export { fadeIn };
