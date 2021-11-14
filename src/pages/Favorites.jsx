import { ListOfFavs } from "../components/ListOfFavs";
import { Helmet } from "react-helmet";

const Favorites = ({ logged, notRegisterUser }) => {
  return (
    <>
      {!logged ? (
        notRegisterUser()
      ) : (
        <>
          <Helmet>
            <title>PetGram - Your favorites</title>
            <meta
              name="description"
              content="Here you can find your favorites"
            />
          </Helmet>
          <ListOfFavs
            onLoading={() => <h2>Loading...</h2>}
            onError={(message) => <h2>{message}</h2>}
          />
        </>
      )}
    </>
  );
};

export { Favorites };
