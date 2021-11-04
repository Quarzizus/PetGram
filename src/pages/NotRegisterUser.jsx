import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const NotRegisterUser = () => {
  const { setLogin } = useContext(AppContext);

  return (
    <div>
      <h2>NotRegisterUser</h2>
      <button onClick={() => setLogin(true)}>Login</button>
    </div>
  );
};

export { NotRegisterUser };
