import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/index";
import { Logo } from "../components/Logo";
import "../styles/GlobalStyles.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}

export default App;
