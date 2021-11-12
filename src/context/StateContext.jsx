import { AppContext } from "./AppContext";
import { useState } from "react";

const StateContext = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    return sessionStorage.getItem("token");
  });

  const value = {
    logged,
    setLogged,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { StateContext };
