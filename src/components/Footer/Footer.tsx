import React from "react";
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  SocialLinks,
  SocialIconLink,
  UsefulLinks,
  Link,
  ColumnTitle,
} from "./FooterStyles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      {/* Social Media Icons */}
      <SocialLinks>
        <ColumnTitle>Follow Us</ColumnTitle>
        <SocialIconLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={24} />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest size={24} />
        </SocialIconLink>
        <SocialIconLink
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={24} />
        </SocialIconLink>
      </SocialLinks>

      {/* Useful Links */}
      <UsefulLinks>
        <ColumnTitle>Useful Links</ColumnTitle>
        <Link href="#">About Us</Link>
        <Link href="#">Customer Service</Link>
        <Link href="#">Privacy Policy</Link>
      </UsefulLinks>

      {/* Contact */}
      <UsefulLinks>
        <ColumnTitle>Contact</ColumnTitle>
        <Link href="#">Contact Form</Link>
        <Link href="#">FAQ</Link>
      </UsefulLinks>

      {/* Other Links */}
      <UsefulLinks>
        <ColumnTitle>Other</ColumnTitle>
        <Link href="#">Retailers</Link>
        <Link href="#">Collabs</Link>
      </UsefulLinks>
    </FooterContainer>
  );
};

export default Footer;
