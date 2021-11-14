import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";
import { withPhotos } from "../../graphql/Queries";
import { memo } from "react";

const ListOfPhotoCardsComponent = ({ onLoading, onError, categoryId }) => {
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

export const ListOfPhotoCards = memo(ListOfPhotoCardsComponent);
