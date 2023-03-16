import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  font-size: 12px;
  top: 0;
  background-color: pink;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  margin-right: 50px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>
      <Col>
        <button>Search</button>
      </Col>
    </Nav>
  );
}

export default Header;
