import { useQuery, gql } from "@apollo/client";
import { PhotoCard } from "../components/PhotoCard";
import { getSinglePhoto } from "../graphql/Queries";

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
