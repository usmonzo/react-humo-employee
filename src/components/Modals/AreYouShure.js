import styled from "styled-components";

export const ModalContainer = styled.div`
  border-radius: 12px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;

  gap: 25px;
  padding: 30px 70px 40px 70px;
`;

export const ModalImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.006em;
    color: #55ba31;
  }
`;
export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Horizontal = styled.div`
  width: 430px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ModalLogo = styled.img`
  width: 80px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.1) 0 7px 29px 0;
`;
export const ModalHeadline = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.006em;
  color: #2e2f31;
  mix-blend-mode: normal;
`;
