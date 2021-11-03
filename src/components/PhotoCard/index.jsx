import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { Card, ContainerImg, Image } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { LikeButton } from "../LikeButton";
import { gql, useMutation } from "@apollo/client";
import { Link } from "@reach/router";

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const key = `like-${id}`;

  const [liked, setLiked] = useLocalStorage(key, false);
  const [cardRef, show] = useNearScreen();

  const likeAnonymousPhoto = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `;

  const [mutateLike] = useMutation(likeAnonymousPhoto);

  const handleClickLike = () => {
    !liked &&
      mutateLike({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };

  return (
    <Card ref={cardRef}>
      {show ? (
        <>
          <Link to={`/detail/${id}`}>
            <ContainerImg>
              <Image src={src} alt="" />
            </ContainerImg>
          </Link>
          <LikeButton likes={likes} onClick={handleClickLike} liked={liked} />
        </>
      ) : null}
    </Card>
  );
};
