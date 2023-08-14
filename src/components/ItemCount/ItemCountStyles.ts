import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 12px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
