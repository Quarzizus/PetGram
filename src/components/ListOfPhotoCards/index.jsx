import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";

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

const ListOfPhotoCards = ({ onLoading, onError, categoryId }) => {
  const { error, loading, data } = useQuery(withPhotos, {
    variables: { categoryId },
  });

  return (
    <div className="ListOfPhotoCards">
      {loading && onLoading()}
      {error && onError(error.message)}

      {!error &&
        !loading &&
        data.photos.map((photo) => {
          return <PhotoCard key={photo.id} {...photo} />;
        })}
    </div>
  );
};

export { ListOfPhotoCards };
