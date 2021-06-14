import styled from "styled-components";

export const ProductListContainer = styled.div`
  grid-column: 2 / -1;
  background-color: var(--lightgray);
  height: calc(100vh - 5rem);

  display: grid;
  grid-template-columns: 1fr 15rem;
`;

export const RightSidebarContent = styled.div`
  background: var(--lightgray);
  padding: 1rem;
  max-width: 14rem;
  grid-column: 3 / 3;
  height: calc(100vh - 5rem);
  border-left: 2px solid lightgray;

  h4 {
    margin-bottom: 5px;
    margin-top: 15px;
  }
  span {
    margin-left: 5px;
    font-size: 13px;
  }
`;

export const ProductListProducts = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
