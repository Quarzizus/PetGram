import { WithRegisterLoginForm } from "../containers/WithRegisterLoginForm";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { signup, login } from "../graphql/Mutations";
import { UserForm } from "../components/UserForm";
import { AppContext } from "../context/AppContext";

const User = () => {
  const [typeForm, setTypeForm] = useState(false);
  const { logged, setLogged } = useContext(AppContext);

  const [createUser, { loading: loadingRegister, error: errorRegister }] =
    useMutation(signup);
  const [loginUser, { loading: loadingLogin, error: errorLogin }] =
    useMutation(login);

  const Form = () => {
    if (typeForm) {
      return WithRegisterLoginForm(UserForm)({
        onClick: createUser,
        loading: loadingRegister,
        error: errorRegister,
        typeForm,
        setTypeForm,
        title: "Register",
        toggleMessage: "You have already count?",
        setLogged,
        keyForm: "signup",
      });
    } else {
      return WithRegisterLoginForm(UserForm)({
        onClick: loginUser,
        loading: loadingLogin,
        error: errorLogin,
        typeForm,
        setTypeForm,
        title: "Login",
        toggleMessage: "I haven't count",
        setLogged,
        keyForm: "login",
      });
    }
  };

  return <div>{logged ? <h2>User...</h2> : Form()}</div>;
};

export { User };
