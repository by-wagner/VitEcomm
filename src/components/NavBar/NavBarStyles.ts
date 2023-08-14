import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Brand = styled.h1`
  color: white;
  font-size: 25px;
  margin-right: auto;
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
`;

export const Category = styled.li`
  margin-right: 25px;
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
