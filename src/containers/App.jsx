import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Detail } from "../pages/Detail";
import { User } from "../pages/User";
import { Logo } from "../components/Logo";
import { Router } from "@reach/router";
import { NavBar } from "../components/NavBar";
import "../styles/GlobalStyles.css";
import { WithLogged } from "./WithLogged";

function App() {
  return (
    <div className="App">
      <Logo />
      <WithLogged>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        <Favorites path="/favorites" />
        <User path="/user" />
      </WithLogged>
      <NavBar />
    </div>
  );
}

export default App;
