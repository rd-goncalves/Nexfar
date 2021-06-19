import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--primaryBg);
  grid-column: 2 / -1;
  height: calc(100vh - 8rem);
`;

export const CartHeader = styled.div`
  grid-column: 2 / -1;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  text-align: center;
  padding: 1rem;

  i {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  span {
    padding: 0 10px 0 10px;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

export const CartBody = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: calc(100vw - 17.5rem - 300px) 300px;
  height: 100%;
`;
export const CartProducts = styled.div`
  grid-column: 1 / 1;
  background-color: var(--primaryBg);
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const CartValues = styled.div`
  grid-column: 2 / 2;
  background-color: var(--primaryBg);
  width: 300px;
  height: 150px;

  display: flex;
  align-items: center;
`;

export const CartCustomer = styled.div`
  grid-column: 1 / 1;
  background-color: var(--primaryBg);
  width: 600px;
  height: 250px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const CustomerContent = styled.table`
  padding: 5px;
  font-size: 13px;
  width: 100%;

  td {
    padding-top: 8px;
  }
  .value {
    font-weight: 500;
  }
`;
