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
  padding: 1rem;
  width: 17.5rem;
  grid-column: 1/1;
  height: calc(100vh - 5rem);
`;

export const CompanyInfos = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  padding-right: 1rem;
  font-size: 14px;
  font-weight: 400;

  div {
    padding-left: 5px;
    flex: 1;
  }

  #company-name {
    font-weight: 600;
  }
`;

export const MenuGroup = styled.ul`
  padding: 0.5rem 1rem;
`;

export const MenuTitle = styled.li`
  font-weight: 600;
`;

export const MenuItem = styled.li`
  font-weight: 400;

  padding: 4px;

  span {
    margin-left: 5px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--lightgreen);
  }
`;

export const ProductContainer = styled.div`
  grid-column: 1 / 8;
  background: var(--white);
  border-radius: 15px;
  width: calc(100% - 2rem);
  max-width: 1000px;
  min-width: 710px;
  margin: 1rem;
  padding: 1rem;

  .Header {
    height: 2rem;
    border-bottom: 2px solid var(--lightgray);
    margin-bottom: 10px;

    h4 {
      margin-left: 20px;
      display: inline;
    }
  }

  .Content {
    display: grid;
    grid-template-columns: repeat(23, 1fr);
    /* background: blue; */
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
      border-bottom: 1px solid var(--lightgray);
    }
  }
  .Infos {
    margin-left: 26px;
    grid-column: 4 / -1;
    height: 2rem;
    padding-top: 0.5rem;
  }

  td {
    width: 100px;
    text-align: center;
  }

  button,
  i {
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 4px;
    border: none;
  }
  .minus,
  .delete {
    color: var(--pink);
  }

  .plus {
    color: var(--lightgreen);
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
    border-bottom: 1px solid var(--lightgray);
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
  font-size: 12px;
  font-weight: 300;
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
