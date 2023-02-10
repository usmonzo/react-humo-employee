import styled from 'styled-components';

export const MainBodyContainer = styled.div`
  background: #edeef0;
  /* padding-bottom: 100px; */
  @media screen and (max-width: 490px) {
    padding-top: 80px;
  }
`;

export const MainBodyContent = styled.div`
  min-height: 100vh;
  padding: 50px 30px;
  margin: 10px auto;
  max-width: 1280px;
`;

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

export const MainBodyHeadline = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 28px;
  /* margin-bottom: 20px; */
`;
export const MainBodyGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const MainBodyBtn = styled.button`
  margin-left: 10px;
  color: #757575;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  border: none;
  width: 48px;
  height: 48px;
  background: #eeeeee;
  border-radius: 55px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const BackButton = styled.button`
  border-radius: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #fafafa;
  outline: none;
`;
