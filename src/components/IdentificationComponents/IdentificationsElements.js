import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import { Button, Input, Select } from '@chakra-ui/react';

const faqCSS = css`
  flex-direction: column;
`;

export const FormContainer = styled.div`
  background: #edeef0;
  border: 2px solid red;
`;

export const FormContent = styled.div`
  min-height: 84vh;
  max-width: 585px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 0 auto;
  padding: 40px 5px;
  border: 2px solid yellow;
`;
export const FormHeadline = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  padding-bottom: 10px;
`;

export const MiniFormContainer = styled.div`
  margin-bottom: 135px;
  background: none;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px 0 0;
  transition: 0.3s all ease-in-out;
`;

export const HideBlock = styled.div`
  display: ${({ show }) => (!show ? 'none' : 'flex')};
  //flex-direction: column;
  ${faqCSS}
`;
export const HideBlock2 = styled.div`
  display: ${({ show2 }) => (!show2 ? 'none' : 'flex')};
  ${faqCSS}
`;
export const HideBlock3 = styled.div`
  display: ${({ show3 }) => (!show3 ? 'none' : 'flex')};
  ${faqCSS}
`;

export const HideBlock4 = styled.div`
  display: ${({ show4 }) => (!show4 ? 'none' : 'flex')};
  ${faqCSS}
`;
export const HideBlock5 = styled.div`
  display: ${({ show5 }) => (!show5 ? 'none' : 'flex')};
  ${faqCSS}
`;
export const HideBlock6 = styled.div`
  display: ${({ show6 }) => (!show6 ? 'none' : 'flex')};
  ${faqCSS}
`;
export const HideBlock7 = styled.div`
  display: ${({ show7 }) => (!show7 ? 'none' : 'flex')};
  ${faqCSS}
`;

export const WhiteContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  max-width: 580px;
  width: 100%;
  margin-bottom: 30px;
`;
export const FormInput = styled(Input)`
  gap: 12px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
  max-width: 532px;
`;
export const FormSelect = styled(Select)`
  gap: 12px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
`;
export const FormLabel = styled.label`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
`;
export const VerticalGroupClick = styled.div`
  padding: 0 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const Horizontal = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0, 0.87);
  }
`;
export const Vertical = styled.div`
  max-width: 532px;
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding: 0 7px;
`;
export const VerticalBtns = styled.div`
  gap: 16px;
  position: sticky;
  top: 170px;
  z-index: 3;
  align-self: flex-start;
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 7px;
`;
export const GrayBlock = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 12px 16px;
  width: 532px;
  background: #f5f5f5;

  border-radius: 12px;
`;
export const PrimaryText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
export const SecondaryText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
`;
export const SlimText = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;

export const RoundBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: #f5f5f5;
  font-size: 17px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
  cursor: pointer;

  &.active {
    transition: 0.2s ease-out;
    border: 2px solid #ff6200;
    background-color: #ff6200;
    color: #ff6200;
  }
  :focus {
    outline: none;
  }

  :hover {
    border: 2px solid #ff6200;
    transition: 0.2s all ease-out;
  }
`;
export const ScoringBtn = styled(Button)`
  width: 100%;
  background: #ffffff;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  height: 48px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.07) 0 10px 7px 0;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.29) 0 8px 15px 0;
    transition: 0.2s ease-in;
  }
`;
export const ScoredData = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const GrayLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 0;
  padding: 0;
  display: flex;
  border-bottom: 1px solid #eeeeee;
`;
