import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "../PhotoCard/styles";
import PropTypes from "prop-types";

const LikeButton = ({ likes, onClick, liked }) => {
  const IconLike = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <IconLike size="22px" color="#109df0" />
      {likes} likes!
    </Button>
  );
};

LikeButton.PropTypes = {
  likes: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  Liked: PropTypes.number.isRequired,
};

export { LikeButton };
