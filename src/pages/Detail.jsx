import React from "react";
import { WithDetailPhotoCard } from "../containers/WithDetailPhotoCard";

const Detail = ({ detailId }) => {
  return (
    <WithDetailPhotoCard
      id={detailId}
      onLoading={() => <h2>Loading...</h2>}
      onError={(error) => <h2>Error...{error}</h2>}
    />
  );
};

export { Detail };
