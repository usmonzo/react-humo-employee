import styled from 'styled-components';
//
//
//          BACKGROUND
//
export const Container = styled.div`
  background: #edeef0;
  padding-bottom: 100px;
  @media screen and (max-width: 490px) {
    padding-top: 80px;
  }
`;

export const Content = styled.div`
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
`;

//
//
//              NAVIGATION
//
//

export const PageNavigation = styled.div`
  display: flex;
  flex-direction: row;
  padding: 55px 0 35px 0;
  align-items: center;
`;
export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.87);
`;

export const DateStatusP = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
`;

//
//
//              BODY
//
//

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  gap: 24px;
`;
export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  /* h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.6);
  } */

  h6 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 250px;
  background: #ffffff;
  border-radius: 12px;
`;
export const WhiteBoxContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
//
//          Graph
//
export const GraphContainer = styled.div`
  max-height: 250px;
  min-width: 700px;
  width: 100%;
  height: 100%;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
`;
//
//          text

export const Secondary = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 28px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
`;

export const Primary = styled.h3`
  padding-top: 10px;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.87);
`;
