import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { Card, ContainerImg, Image } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { LikeButton } from "../LikeButton";
import { useMutation } from "@apollo/client";
import { Link } from "@reach/router";
import { likePhoto } from "../../graphql/Mutations";
import { favs } from "../../graphql/Queries";

export const PhotoCard = ({ id, liked, likes = 0, src = defaultImage }) => {
  const [cardRef, show] = useNearScreen();

  const [mutateLike] = useMutation(likePhoto, {
    refetchQueries: [{ query: favs }],
  });

  const handleClickLike = () => {
    mutateLike({
      variables: {
        input: { id },
      },
    });
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
