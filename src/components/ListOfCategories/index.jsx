import { Category } from "../Category/index";
import { List, Item } from "./styles";
// import { useState, useEffect } from "react";
import { categories } from "../../db.json";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
