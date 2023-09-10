import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 300px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  p {
    margin-top: 5px;
  }

  button {
    margin-top: 15px;
    padding: 10px 15px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #333;
    }
  }
`;
