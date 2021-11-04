const Favorites = ({ login, notRegisterUser }) => {
  return <div>{!login ? notRegisterUser() : <h2>Favorites</h2>}</div>;
};

export { Favorites };
