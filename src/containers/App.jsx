import { Home } from "../pages/Home";
import { Logo } from "../components/Logo";
import { Detail } from "../pages/Detail";
import { Router } from "@reach/router";
import "../styles/GlobalStyles.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>
    </div>
  );
}

export default App;
