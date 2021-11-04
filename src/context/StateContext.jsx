import { AppContext } from "./AppContext";
import { useState } from "react";

const StateContext = ({ children }) => {
  const [login, setLogin] = useState(false);

  const value = {
    login,
    setLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { StateContext };
