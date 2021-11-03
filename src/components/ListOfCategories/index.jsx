import { Category } from "../Category/index";
import { List, Item } from "./styles";
import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";

export const ListOfCategories = () => {
  const [visibility, setVisibility] = useState(false);

  const { data: categories, loading, error } = useFetchData("categories");

  useEffect(() => {
    const onScroll = (e) => {
      let newShowFixed = window.scrollY > 220;
      newShowFixed ? setVisibility(true) : setVisibility(false);
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [visibility]);

  const renderList = (fixed) => {
    if (loading) {
      return <h2>Cargando</h2>;
    } else {
      return (
        <List fixed={fixed}>
          {categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))}
        </List>
      );
    }
  };

  return (
    <>
      {renderList()}
      {visibility && renderList(true)}
    </>
  );
};
