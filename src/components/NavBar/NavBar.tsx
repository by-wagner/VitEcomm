import React, { useState } from "react";
import { 
    NavBarContainer, 
    Logo, 
    MenuIcon, 
    CartIcon, 
    OffCanvas, 
    CloseIcon, 
    OffCanvasLinks,
    IconsContainer
} from "./NavBarStyles";
import { useCart } from "../Cart/CartContext";
import { FaTimes, FaInstagram, FaTiktok, FaPinterest, FaYoutube } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";  // Ícone do menu
import { HiOutlineShoppingBag } from "react-icons/hi";  // Ícone do carrinho
import { MdClose } from "react-icons/md";


const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();

    const handleMenuToggle = () => {
        console.log("Toggling menu...");
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <NavBarContainer>
                <Logo>Logo</Logo>
                <IconsContainer>
                    <CartIcon>
                        <HiOutlineShoppingBag size={24} />  {/* Ícone do carrinho atualizado */}
                        <span>{cart.length}</span>
                    </CartIcon>
                    <MenuIcon onClick={handleMenuToggle}>
                        {isMenuOpen ? <MdClose size={24} /> : <CiMenuFries size={24} />}  {/* Ícone do menu atualizado */}
                    </MenuIcon>
                </IconsContainer>
            </NavBarContainer>

            <OffCanvas isOpen={isMenuOpen}>
                <CloseIcon onClick={handleMenuToggle}>
                    <FaTimes size={24} />
                </CloseIcon>
                <OffCanvasLinks>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#"><FaInstagram /> Instagram</a></li>
                    <li><a href="#"><FaTiktok /> TikTok</a></li>
                    <li><a href="#"><FaPinterest /> Pinterest</a></li>
                    <li><a href="#"><FaYoutube /> YouTube</a></li>
                </OffCanvasLinks>
            </OffCanvas>
        </>
    );
};

export default NavBar;
