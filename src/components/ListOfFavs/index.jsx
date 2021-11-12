import { useQuery } from "@apollo/client";
import { favs } from "../../graphql/Queries";
import { Img, Link, Grid } from "./styles";

const ListOfFavs = ({ onLoading, onError }) => {
  const { loading, error, data } = useQuery(favs);
  return (
    <Grid>
      {error && onError(error.message)}
      {loading && onLoading()}
      {!loading && !data.favs.length && <h2>Añada favoritos</h2>}
      {!loading &&
        !error &&
        data.favs.map(({ src, id }) => {
          return (
            <Link to={`/detail/${id}`} key={id}>
              <Img src={src} />
            </Link>
          );
        })}
    </Grid>
  );
};

export { ListOfFavs };
