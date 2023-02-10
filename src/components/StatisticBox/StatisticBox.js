import styled from 'styled-components';

// containers
export const StatisticBoxContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  max-width: 420px;
  width: 100%;
`;

export const StatisticBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatisticHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const Vertical = styled.div`
  max-width: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  /* gap: 6px; */
`;

export const GrayContainers = styled.div`
  background-color: #fafafa;
  max-width: 175px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
`;

//text
export const DateText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #686d73;

  span {
    color: #e16025;
  }
  p {
    color: #31353a;
    font-weight: 500;
  }
`;
export const GrayPrimaryText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #969696;
`;

export const DarkPrimaryText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.006em;
  color: #31353a;
`;
export const DarkSlimText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.006em;
  color: #31353a;
`;
