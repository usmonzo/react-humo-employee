import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 40px 40px;
  gap: 12px;
  position: relative;
  background: #f2f3f4f5;
  border-radius: 12px;
`;
export const ModalHeadline = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.006em;
  color: #2e2f31;
  mix-blend-mode: normal;
`;
export const ModalText = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.006em;
  color: #2e2f31;
  mix-blend-mode: normal;
  margin-top: 15px;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 12px;
  width: 488px;
  height: 84px;
  background: #ffffff;
  border-radius: 15px;
`;
export const ModalLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
`;
export const DHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Bold = styled.h3`
  margin-left: 12px;
  margin-right: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
export const Slim = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
export const GrayText = styled.h3`
  margin-left: 12px;
  margin-right: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.6);
`;
