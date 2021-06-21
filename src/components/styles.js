import styled from "styled-components";

export const HeaderContent = styled.header`
  grid-column: 1/-1;
  background: var(--white);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  border-bottom: 3px solid var(--lightgreen);
  cursor: pointer;

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 0.75rem;
  }

  #CartInfos {
    display: flex;
    flex-direction: row;
  }
`;

export const GreenText = styled.span`
  color: var(--lightgreen);
  font-size: ${(props) => `${props.fontSize}px`};
  font-weight: 500;
`;

export const LeftSidebarContent = styled.div`
  background: var(--white);
  width: 15rem;
  grid-column: 1/1;
  height: calc(100vh - 5rem);
`;

export const CompanyInfos = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  font-size: 14px;
  font-weight: 400;

  div {
    padding-left: 5px;
    flex: 1;
  }

  .fa-store {
    font-size: 24px;
  }

  .company-name {
    font-weight: 600;
  }
`;

export const MenuContainer = styled.ul`
  width: 100%;
  padding-left: 20px;
`;

export const MenuGroup = styled.ul`
  padding-bottom: 10px;
`;

export const MenuTitle = styled.li`
  font-weight: 600;
  padding-bottom: 5px;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: lightgray;
  cursor: not-allowed;

  i {
    width: 35px;
    padding: 12px 0 12px 10px;
    margin-left: 6px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--lightgreen);
  }

  .Selected-Menu {
    background-color: var(--primaryBg);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const ProductContainer = styled.div`
  grid-column: 1 / 8;
  border-radius: 15px;
  max-width: 1000px;
  min-width: 610px;
  margin: 1rem;
  padding: 1rem;
  background: var(--white);

  .Header {
    height: 2rem;
    border-bottom: 2px solid var(--primaryBg);
    margin-bottom: 10px;

    h4 {
      margin-left: 20px;
      display: inline;
    }
  }

  .Content {
    display: grid;
    grid-template-columns: repeat(23, 1fr);
    padding-top: 1rem;

    .imgContainer {
      grid-column: 1 / 4;
      margin: 0 auto;
      height: 120px;
      width: 120px;
      text-align: center;
    }

    img {
      max-height: 120px;
      max-width: 120px;
    }

    table {
      grid-column: 5 / -1;
      border-bottom: 1px solid var(--primaryBg);
      height: 120px;
      padding-bottom: 20px;

      th {
        color: var(--gray);
        font-size: 14px;
        font-weight: 400;
      }
      .BaseHeader {
        padding-left: 20px;
        text-align: left;
      }
      td {
        width: 100px;
        text-align: center;
      }

      .BaseContent {
        padding-left: 20px;
        text-align: left;

        div:first-of-type {
          font-size: 13px;
        }

        div:last-of-type {
          font-weight: 500;
        }
      }

      .inStockContent {
        font-size: 15px;
      }

      .outOfStockContent {
        display: flex;
        font-size: 10px;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
        }
      }

      .TotalContent {
        font-weight: 500;
      }

      .TrashcanContent {
        width: 60px;
        text-align: right;
      }
    }
  }

  .ProductQty {
    width: 140px;

    div {
      display: flex;
      justify-content: center;
    }
  }
  .MuiInputBase-input {
    text-align: center;
  }

  button,
  i {
    background: none;
    cursor: pointer;
    font-size: 24px;
    padding: 6px 10px 0 10px;
    border: none;
  }
  .fa-warehouse {
    font-size: 16px;
    color: var(--gray);
  }

  .fa-mobile {
    font-size: 20px;
    padding: 0 10px 0 10px;
  }

  .fa-minus-circle {
    color: var(--pink);
    :disabled {
      color: gray;
      pointer-events: none;
    }
  }

  .fa-plus-circle {
    color: var(--lightgreen);
    :disabled {
      color: gray;
      pointer-events: none;
    }
  }

  .fa-trash-alt {
    color: var(--pink);
    font-size: 20px;
  }

  .Footer {
    margin-left: 26px;
    grid-column: 4 / -1;
    height: 2rem;
    padding-top: 0.5rem;
  }
`;

export const RightSidebarContent = styled.div`
  background: var(--primaryBg);
  padding: 0.3rem 0 0 1rem;
  min-width: 12rem;
  grid-column: 3 / 3;
  height: calc(100vh - 5rem);
  border-left: 2px solid lightgray;

  li {
    height: 23px;
  }

  h4 {
    color: var(--purple);
    margin-bottom: 5px;
    margin-top: 15px;
  }

  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

//ContentBox
export const StyledBox = styled.div`
  background: var(--white);
  border-radius: 15px;
  width: 100%;
  height: 100%;
  margin: 1rem;
  padding: 1rem;

  header {
    height: 2rem;
    border-bottom: 1px solid var(--primaryBg);
    margin-bottom: 10px;

    span {
      font-size: 16px;
      font-weight: 600;
    }

    div {
      overflow: auto;
    }
  }

  overflow: auto;
`;

export const Info = styled.span`
  background: ${(props) => props.background};
  border-radius: 20px;
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "12px")};
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  margin: 5px;
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
`;

export const CartButton = styled.button`
  color: var(--lightgreen);
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  border: none;
`;
