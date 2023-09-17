import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  padding: 0 20px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 50px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CartIcon = styled.div`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 0.8rem;
  }
`;

export const MenuIcon = styled.div`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

export const OffCanvas = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  transition: right 0.3s ease-in-out;
  z-index: 10;
`;

export const OffCanvasHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const CloseIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const OffCanvasBody = styled.div`
  padding: 20px;
`;

export const OffCanvasLinks = styled.ul`
  list-style-type: none;
  padding: 20px; // Adicionando padding
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 2em;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #888;
    }
  }
`;
