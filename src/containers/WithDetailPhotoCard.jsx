import { useQuery, gql } from "@apollo/client";
import { PhotoCard } from "../components/PhotoCard";

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
const WithDetailPhotoCard = ({ id, onLoading, onError }) => {
  const { error, loading, data } = useQuery(getSinglePhoto, {
    variables: {
      id: id,
    },
  });

  return (
    <>
      {error && onError(error.message)}
      {loading && onLoading()}
      {!loading && !error && <PhotoCard {...data.photo} />}
    </>
  );
};

export { WithDetailPhotoCard };
