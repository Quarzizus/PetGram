import React from "react";

const User = ({ login, notRegisterUser }) => {
  return <div>{!login ? notRegisterUser() : <h2>Perfil of User</h2>}</div>;
};

export { User };
