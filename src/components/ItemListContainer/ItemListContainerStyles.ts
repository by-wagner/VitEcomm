import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px; // Espaçamento entre os cards
  justify-content: space-between;
`;

export const Greeting = styled.h2`
  color: white;
`;
