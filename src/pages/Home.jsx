import { ListOfCategories } from "../components/ListOfCategories/";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/";
import { Helmet } from "react-helmet";
import { memo } from "react";

const HomePage = ({ categoryId, logged, notRegisterUser }) => {
  return (
    <>
      {!logged ? (
        notRegisterUser()
      ) : (
        <>
          <Helmet>
            <title>PetGram - App de Photos</title>
            <meta
              name="description"
              content="With petgram you can found animal pictures so pretties"
            />
          </Helmet>
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

export const Home = memo(HomePage, (prev, props) => {
  return prev.categoryId === props.categoryId;
});
