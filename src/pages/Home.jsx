import React from "react";
import { ListOfCategories } from "../components/ListOfCategories/";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/";

const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards
        onLoading={() => <h2>Loading...</h2>}
        onError={(error) => <h2>Error...{error}</h2>}
        categoryId={categoryId}
      />
    </>
  );
};

export { Home };
