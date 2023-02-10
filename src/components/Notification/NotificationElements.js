import styled from 'styled-components';

export const Ncontainer = styled.div`
  width: 450px;
  max-height: 820px;
  float: right;
  /* background: #edeef0; */
  background: #ffffff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media screen and (max-width: 490px) {
    box-shadow: none;
    max-height: 700px;
    width: 390px;
  }
`;
export const NScrollContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 25px;
  height: 690px;
  width: 425px;
  /* overflow: scroll; */
  overflow-y: scroll;
  @media screen and (max-width: 490px) {
    height: 600px;
    width: 350px;
  }
`;
export const NHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 40px;
`;
export const NVertical = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 0 7px;
`;

export const NHeader = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
export const NHeadline = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px;
`;

export const OrangeP = styled.p`
  width: 226px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.006em;
  color: #ff6200;

  @media screen and (max-width: 490px) {
    width: 150px;
  }
`;

export const GrayH4 = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
  margin-bottom: 5px;
`;

export const NewNotification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 396px;
  padding: 16px;
  border: 1px solid #ff6200;
  border-radius: 12px;
  background: #ffffff;

  p {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  h5 {
    align-self: flex-end;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.38);
  }
`;
export const OldNotification = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 396px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  background: #ffffff;

  p {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  h5 {
    align-self: flex-end;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.38);
  }
  @media screen and (max-width: 490px) {
    width: 340px;
  }
`;
