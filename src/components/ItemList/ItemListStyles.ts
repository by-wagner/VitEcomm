import styled from 'styled-components';

export const ProductListContainer = styled.div`
  flex: 1 0 calc(20% - 20px); // 20px é a margem total (10px de cada lado)
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
