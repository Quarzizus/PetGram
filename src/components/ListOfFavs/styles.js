import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Link = styled(LinkRouter)`
  width: 100%;
  text-decoration: none;
`;

export { Img, Link, Grid };
