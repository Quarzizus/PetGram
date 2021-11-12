import { Children, cloneElement } from "react";
import { NotRegisterUser } from "../pages/NotRegisterUser";
import { Router } from "@reach/router";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const WithLogged = ({ children }) => {
  const { logged } = useContext(AppContext);

  const Routes = Children.toArray(children).map((child) =>
    cloneElement(child, {
      logged,
      notRegisterUser: () => <NotRegisterUser />,
    })
  );
  return <Router>{Routes}</Router>;
};

export { WithLogged };
