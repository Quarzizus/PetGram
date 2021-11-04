import { UserForm } from "../components/UserForm";

const User = ({ login, notRegisterUser }) => {
  return <div>{!login ? notRegisterUser() : <UserForm title="Login" />}</div>;
};

export { User };
