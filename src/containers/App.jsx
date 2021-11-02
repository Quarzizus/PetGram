import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards/index";
import { WithDetailPhotoCard } from "./WithDetailPhotoCard";
import { Logo } from "../components/Logo";
import "../styles/GlobalStyles.css";

function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div className="App">
      <Logo />

      {detailId ? (
        <WithDetailPhotoCard
          id={detailId}
          onLoading={() => <h2>Loading...</h2>}
          onError={(error) => <h2>Error...{error}</h2>}
        />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards
            onLoading={() => <h2>Loading...</h2>}
            onError={(error) => <h2>Error...{error}</h2>}
            categoryId={2}
          />
        </>
      )}
    </div>
  );
}

export default App;
