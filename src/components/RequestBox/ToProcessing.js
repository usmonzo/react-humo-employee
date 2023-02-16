import { Button } from 'antd';
import styled from 'styled-components';

export const MainBodySection = styled.section`
  display: flex;
  margin: 20px 0 50px 0;
  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }
  @media screen and (max-width: 840px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
  @media screen and (max-width: 621px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    justify-items: center;
  }
`;

export const RequestContainer = styled.div`
  background: #ffffff;
  max-width: 1280px;
  width: 100%;
  border: 1px solid #e9ecee;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 54px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 16px;

  @media screen and (max-width: 1200px) {
    height: auto;
    max-width: 400px;
  }
  @media screen and (max-width: 621px) {
    height: auto;
    width: 100%;
    max-width: 400px;
  }
`;
export const RequestContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
  }
`;
export const RequestH1 = styled.h1`
  width: 240px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  padding-right: 40px;
  @media screen and (max-width: 1200px) {
    padding-right: 0;
    height: auto;
    width: auto;
  }
`;
export const Horizontal = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    grid-column: 2 span;
    padding-bottom: 20px;
  }
`;
export const RequestInfoGroup = styled.div`
  display: flex;
  flex-direction: column;

  > h5 {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.38);
  }

  > h3 {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const RequestButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background: #ff6200;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  margin-left: 4px;

  h1 {
    display: none;
    color: #ffffff;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    grid-column: 2 span;
    grid-row: 5;
    margin-top: 15px;

    div {
      display: none;
    }

    h1 {
      display: flex;
      color: #ffffff;
      text-align: center;
    }
  }
`;
export const RequestImage = styled.img`
  width: 48px;
  height: 48px;
`;
