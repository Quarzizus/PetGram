import defaultImage from "../../images/defaultcategoryimage.jpeg";
import { Picture, Image } from "./styles";
import { Link } from "@reach/router";

export const Category = ({ cover = defaultImage, path, emoji = "?" }) => {
  return (
    <Link to={path}>
      <Picture>
        <Image src={cover} />
        {emoji}
      </Picture>
    </Link>
  );
};
