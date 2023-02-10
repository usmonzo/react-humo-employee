import React from 'react';
import footerLogo from '../../assets/FooterLogo.svg';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  z-index: 2;
  /* top: 100%; */
  height: 65px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #dbdddf89;
  /* background: #ff8f33; */
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  clear: both;
  margin-top: 100px;
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  /* padding: 16px 50px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const FooterLogo = styled.img`
  width: 32px;
  height: 32px;
`;

export const FooterLogoText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 23.0556px;
  line-height: 28px;
  letter-spacing: 0.415px;
  color: #959595;
  /* color: #fff; */
`;

export const FooterText = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  color: #959595;
  /* color: #bdbdbd; */
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogoGroup>
          <FooterLogo src={footerLogo} />
          <FooterLogoText>Сотрудник</FooterLogoText>
        </FooterLogoGroup>
        <FooterText>© 2022 “Хумо андеррайтер”</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
