import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { Anchor, Image } from "./styles";

export const Category = ({ cover = defaultImage, path, emoji = "?" }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  );
};
