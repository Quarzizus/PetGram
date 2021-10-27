import { PhotoCard } from "../PhotoCard";
import { photos } from "../../db.json";

export const ListOfPhotoCards = () => {
  return (
    <div>
      {photos.map((photo) => {
        return <PhotoCard key={photo.id} {...photo} />;
      })}
    </div>
  );
};
