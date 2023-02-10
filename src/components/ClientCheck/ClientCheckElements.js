import styled from 'styled-components';

// Containers
// Containers
export const ClientCheckContainer = styled.div`
  background-color: #edeef0;
`;

export const ClientCheckContent = styled.div`
  min-height: 85vh;
  max-width: 1280px;
  margin: 40px auto 130px auto;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WhiteBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 630px;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  gap: 16px;
`;
export const BorderedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 12px;
`;
export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid
    ${({ radioValue }) => (radioValue === '1' ? '#ff6200' : '#eeeeee')};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
`;
export const RadioContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid
    ${({ radioValue }) => (radioValue === '2' ? '#ff6200' : '#eeeeee')};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
`;
export const Horizontal = styled.div`
  max-width: 628px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    justify-self: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: -0.006em;
    color: #212121;
    text-align: center;
  }
`;
export const TextHorizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  max-width: 630px;
  width: 100%;
  gap: 25px;
`;

//typograsphy
//typograsphy
export const PrimaryText = styled.p`
  max-width: 280px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const SecondaryText = styled.p`
  max-width: 280px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
export const WhiteBoxHeadline = styled.h3`
  font-weight: 500;
  font-size: 20px;
`;
export const GrayText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
`;
