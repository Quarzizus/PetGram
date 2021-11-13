import styled from "styled-components";

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  align-items: center;
  justify-content: space-around;
  padding: 25px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
`;

const Button = styled.button`
  width: 45%;
  height: 45px;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  background: linear-gradient(to top, #109df0, #2a828a);
`;

export { Form, Button, Input };
