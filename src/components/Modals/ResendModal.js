import styled from "styled-components";
import { Select } from "@chakra-ui/react";

export const DModalContainer = styled.div`
  border-radius: 16px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;

  > div {
    padding: 24px 87px 40px 87px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const DModalImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  > p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.006em;
    color: #0096e0;
  }
`;
export const DVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DHorizontal = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  gap: 13px;
  align-items: center;
  justify-content: center;
`;
export const DModalLogo = styled.img`
  width: 80px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.1) 0 7px 29px 0;
`;
export const DModalHeadline = styled.h2`
  width: 400px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.006em;
  color: #2e2f31;
  mix-blend-mode: normal;

  span {
    color: red;
  }
`;
export const DModalLabel = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
`;
export const DModalSelect = styled(Select)`
  padding: 8px 12px;
  gap: 12px;
  width: 396px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
