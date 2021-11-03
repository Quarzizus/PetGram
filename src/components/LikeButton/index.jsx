import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "../PhotoCard/styles";

const LikeButton = ({ likes, onClick, liked }) => {
  const IconLike = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <IconLike size="22px" />
      {likes} likes!
    </Button>
  );
};

export { LikeButton };