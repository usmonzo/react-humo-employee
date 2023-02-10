import React from 'react';
import footerLogo from '../../assets/FooterLogo.svg';
import styled from 'styled-components';

const FooterContainer = styled.div`
  /* position: absolute; */
  position: ${(props) => props.position || 'relative'};
  height: 65px;
  bottom: 0;
  right: 0;
  left: 0;
  background: #e3e4e6;
  padding: 5px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  @media screen and (max-width: 550px) {
    height: 80px;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  /* padding: 16px 50px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterLogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

const FooterLogo = styled.img`
  width: 32px;
  height: 32px;
`;

const FooterLogoText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 23.0556px;
  line-height: 28px;
  letter-spacing: 0.415px;
  /* color: #bdbdbd; */
  color: #9e9e9e;
`;

const FooterText = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #9e9e9e;
  /* color: #b4b3b3; */
`;

export default function Footer({ position }) {
  return (
    <FooterContainer position={position}>
      <FooterContent>
        <FooterLogoGroup>
          <FooterLogo src={footerLogo} />
          <FooterLogoText>Сотрудник</FooterLogoText>
        </FooterLogoGroup>
        <FooterText>© 2022 “Хумо Сотрудник”</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
