import styled from "styled-components";

const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  width: 100%;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.li`
  padding: 0 8px;
`;

export { List, Item };
