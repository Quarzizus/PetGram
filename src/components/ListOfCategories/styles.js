import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";

const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  width: 100%;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 15px;
      box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
      background-color: white;
      transform: scale(0.6);
      left: 25%;
      right: 0;
      border-radius: 10px;
      width: 50%;
      ${fadeIn()}
    `}
`;

const Item = styled.li`
  padding: 0 8px;
`;

export { List, Item };
