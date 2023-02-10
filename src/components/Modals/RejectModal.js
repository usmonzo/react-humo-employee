import styled from "styled-components";
import { Select } from "@chakra-ui/react";

export const RModalContainer = styled.div`
  max-width: 570px;
  max-height: 384px;
  border-radius: 12px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;

  > div {
    padding: 24px 70px 40px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const RModalImgGroup = styled.div`
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
    color: #eb4242;
  }
`;

export const RHorizontal = styled.div`
  width: 350px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const RVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RModalLabel = styled.label`
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
export const RModalLogo = styled.img`
  width: 80px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.1) 0 7px 29px 0;
`;
export const RModalHeadline = styled.h2`
  font-family: "Inter", sans-serif;
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

export const RModalSelect = styled(Select)`
  padding: 8px 20px;
  gap: 12px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
