import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

const Card = styled.article`
  background-color: white;
`;

const ContainerImg = styled.div`
  height: 300px;
  padding: 25px 10px;
`;

const Image = styled.img`
  ${fadeIn({ time: "1.2s" })}
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  height: 40px;
  padding: 0 10px;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
`;

export { Card, ContainerImg, Image, Button };
