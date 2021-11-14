import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Detail } from "../pages/Detail";
import { User } from "../pages/User";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { WithLogged } from "./WithLogged";
import "../styles/GlobalStyles.css";

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
