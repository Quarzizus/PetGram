import { gql } from "@apollo/client";

const signup = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
const login = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export { signup, login };
