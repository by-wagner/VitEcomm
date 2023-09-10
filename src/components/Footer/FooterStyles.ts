import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 40px 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
`;

export const SocialLinks = styled(Column)``;

export const SocialIconLink = styled.a`
  margin-right: 1rem;
  color: inherit;
  font-size: 24px; // Ajusta o tamanho do ícone
  transition: color 0.3s ease;

  &:hover {
    color: #888;
  }
`;

export const UsefulLinks = styled(Column)``;

export const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease; // Adiciona transição suave de cor

  &:hover {
    color: #888;
    text-decoration: none; // Remove o sublinhado ao passar o mouse
  }
`;
