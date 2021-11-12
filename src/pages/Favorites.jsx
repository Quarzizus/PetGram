import { ListOfFavs } from "../components/ListOfFavs";

const Favorites = ({ logged, notRegisterUser }) => {
  return (
    <div>
      {!logged ? (
        notRegisterUser()
      ) : (
        <ListOfFavs
          onLoading={() => <h2>Loading...</h2>}
          onError={(message) => <h2>{message}</h2>}
        />
      )}
    </div>
  );
};

export { Favorites };
