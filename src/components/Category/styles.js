import styled from "styled-components";

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  margin-top: 10px;
`;

const Image = styled.img`
  border: 1px solid gray;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%50%;
  height: 75px;
  height: 75px;
  object-fit: cover;
  overflow: hidden;
`;

export { Anchor, Image };
