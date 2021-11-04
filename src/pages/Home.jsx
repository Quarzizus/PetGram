import { ListOfCategories } from "../components/ListOfCategories/";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/";

const Home = ({ categoryId, login, notRegisterUser }) => {
  return (
    <>
      {!login ? (
        notRegisterUser()
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards
            onLoading={() => <h2>Loading...</h2>}
            onError={(error) => <h2>Error...{error}</h2>}
            categoryId={categoryId}
          />
        </>
      )}
    </>
  );
};

export { Home };
