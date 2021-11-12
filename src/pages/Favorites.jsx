const Favorites = ({ logged, notRegisterUser }) => {
  return <div>{!logged ? notRegisterUser() : <h2>Favorites</h2>}</div>;
};

export { Favorites };
