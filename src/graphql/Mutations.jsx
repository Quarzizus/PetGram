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

const likePhoto = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;
export { signup, login, likePhoto };
