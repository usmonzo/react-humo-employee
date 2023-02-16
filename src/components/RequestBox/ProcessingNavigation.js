import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProcessingNavigationContainer = styled.div`
  /* position: sticky; */
  z-index: 2;
  right: 0;
  left: 0;
  top: 65px;
  height: 106px;
  /* background: #edeef0; */
`;
export const ProcessingNavigationContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProcessingNavigationH1 = styled.h1`
  /* margin-left: 10px; */
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
export const ButtonLink = styled(Link)`
  max-width: 250px;
  width: 100%;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
