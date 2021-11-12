import { gql } from "@apollo/client";

const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      likes
      src
      userId
      liked
      categoryId
    }
  }
`;

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const favs = gql`
  query favs {
    favs {
      id
      likes
      liked
      userId
      src
      categoryId
    }
  }
`;

export { getSinglePhoto, withPhotos, favs };
