import React from "react";
import { WithDetailPhotoCard } from "../containers/WithDetailPhotoCard";

const Detail = ({ detailId, login, notRegisterUser }) => {
  return (
    <WithDetailPhotoCard
      id={detailId}
      onLoading={() => <h2>Loading...</h2>}
      onError={(error) => <h2>Error...{error}</h2>}
    />
  );
};

export { Detail };
