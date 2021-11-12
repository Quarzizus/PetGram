import { AppContext } from "./AppContext";
import { useState } from "react";

const StateContext = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const value = {
    logged,
    setLogged,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { StateContext };
