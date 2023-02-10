import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Input } from '@chakra-ui/react';

export const LoginBoxContainer = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px;

  @media screen and (max-width: 600px) {
    padding: 32px;
  }
  @media screen and (max-width: 450px) {
    padding: 12px;
    height: 100vh;
  }
`;

export const LoginBoxContent = styled.div`
  gap: 16px;
  background-color: #ffffff;
  max-width: 538px;
  width: 100%;
  border-radius: 12px;
  padding: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 600px) {
    padding: 32px;
  }
`;

export const LoginBoxLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const LoginBoxHeadline = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
  opacity: 0.87;

  @media screen and (max-width: 540px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const LoginBoxParagraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
  mix-blend-mode: normal;
  opacity: 0.87;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LoginBoxForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LoginBoxFormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  //font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  letter-spacing: -0.006em;
  /* margin-top: 16px; */
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.38);
`;
export const LoginBoxInput = styled(Input)`
  //text-transform: capitalize;
  box-sizing: border-box;
  padding: 8px 12px;
  max-width: 440px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
`;

export const LoginBoxFormButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 12px;
  gap: 10px;
  background: #ff6200;
  border-radius: 100px;
  color: #ffffff;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  box-shadow: RGBA(255, 120, 10, 0.1) 0 10px 7px 0;

  :hover {
    box-shadow: rgba(255, 115, 0, 0.5) 0 8px 15px 0;
    //background-color: #cd4d15;
    transition: all 0.2s ease-out;
  }

  :active {
    background-color: #d84b0f;
    transition: all 0.2s ease-out;
  }
`;

export const LoginBoxLink = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  align-self: flex-end;
  margin-top: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  letter-spacing: -0.006em;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  :hover {
    //text-decoration: underline;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.6);
    /* transition: 0.3s border-bottom ease-in-out; */
  }
`;
