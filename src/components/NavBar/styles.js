import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  max-width: 500px;
  background-color: white;
  display: flex;
  border-top: 1px solid rgba(48, 52, 67, 0.5);
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  position: fixed;
`;

const Link = styled(LinkRouter)`
  color: gray;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  &[aria-current] {
    color: rgba(16, 157, 240, 1);
    &::after {
      content: "•";
      position: absolute;
      bottom: -8px;
      color: black;
      left: calc(50% - 2.7px);
      ${fadeIn()}
    }
  }
`;

export { Nav, Link };
