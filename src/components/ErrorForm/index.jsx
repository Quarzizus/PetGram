import { Container } from "./styles";

const ErrorForm = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export { ErrorForm };
