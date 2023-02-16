import navbarLogo from '../../assets/NavbarLogo.svg';

import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  background: #ffffff;
  /* background: #ff8f33; */
  /* box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04); */
  border-bottom: 1px solid #e7e8ec;

  @media screen and (max-width: 768px) {
    transition: 0.4s all ease-in-out;
    margin-top: -130px;
  }
`;

const NavbarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  /* gap: 235px; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;
const NavbarLogo = styled.img`
  width: 32px;
  height: 32px;
`;
const NavbarLogoText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 23.0556px;
  line-height: 28px;
  letter-spacing: 0.415px;
  color: #ff6200;
  /* color: #fff; */
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogoGroup>
          <NavbarLogo src={navbarLogo} />
          <NavbarLogoText>Employee</NavbarLogoText>
        </NavbarLogoGroup>
      </NavbarContent>
    </NavbarContainer>
  );
}
