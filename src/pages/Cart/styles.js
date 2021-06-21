import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--primaryBg);
  grid-column: 2 / -1;
  height: calc(100vh - 5rem);
  width: calc(100vw - 15rem);
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

  .removeAllProducts {
    cursor: pointer;
    color: var(--pink);
  }
`;

export const ContentBoxProducts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ContentBoxValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartBody = styled.div`
  background-color: var(--primaryBg);
  grid-column: 2 / -1;
  display: flex;

  .LeftContent {
    width: 70%;
    min-width: 540px;
  }

  .RightContent {
    width: 25%;
  }
`;
export const CartProducts = styled.div`
  width: 90%;
  min-width: 540px;
  margin-left: auto;
  margin-right: auto;

  span {
    font-size: 13px;
    font-weight: 500;
    &:last-child {
      padding-right: 5px;
    }
  }
`;

export const CartCustomer = styled.div`
  width: 90%;
  min-width: 540px;
  margin-left: auto;
  margin-right: auto;
`;

export const CustomerContent = styled.table`
  padding-left: 5px;
  font-size: 13px;
  width: 100%;

  td {
    padding-top: 8px;
  }
  .value {
    font-weight: 500;
  }
`;
