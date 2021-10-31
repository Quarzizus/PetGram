import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Card, ContainerImg, Image, Button } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  const key = `like-${id}`;

  const [like, setLike] = useLocalStorage(key, false);
  const [cardRef, show] = useNearScreen();

  const IconLike = like ? MdFavorite : MdFavoriteBorder;

  return (
    <Card ref={cardRef}>
      {show ? (
        <>
          <a href={`/detail/${id}`}>
            <ContainerImg>
              <Image src={src} alt="" />
            </ContainerImg>
          </a>
          <Button onClick={() => setLike(!like)}>
            <IconLike size="22px" />
            {likes} likes!
          </Button>
        </>
      ) : null}
    </Card>
  );
};
