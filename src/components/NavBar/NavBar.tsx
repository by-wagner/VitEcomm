import React from "react";
import { NavBarContainer, Brand, CategoryList, Category } from "./NavBarStyles";
import CartWidget from "../CartWidget/CartWidget";

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Brand>ViteEcomm</Brand>
      <CategoryList>
        <Category>Category 1</Category>
        <Category>Category 2</Category>
        <Category>Category 3</Category>
      </CategoryList>
      <CartWidget />
    </NavBarContainer>
  );
};

export default NavBar;
