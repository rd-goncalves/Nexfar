import styled from "styled-components";

export const ProductListContainer = styled.div`
  grid-column: 2 / -1;
  background-color: var(--primaryBg);
  height: calc(100vh - 5rem);

  display: grid;
  grid-template-columns: 1fr 15rem;
`;

export const ProductListProducts = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
