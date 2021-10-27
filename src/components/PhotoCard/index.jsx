import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { MdFavoriteBorder } from "react-icons/md";
import { Card, ContainerImg, Image, Button } from "./styles";

export const PhotoCard = ({ id, likes = 0, src = defaultImage }) => {
  return (
    <Card>
      <a href={`/detail/${id}`}>
        <ContainerImg>
          <Image src={src} alt="" />
        </ContainerImg>
      </a>
      <Button>
        <MdFavoriteBorder size="22px" />
        {likes} likes!
      </Button>
    </Card>
  );
};
