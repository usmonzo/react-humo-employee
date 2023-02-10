import styled from "styled-components";
import { ImExit } from "react-icons/im";

export const ModalContainer = styled.div`
  width: 530px;
  border-radius: 12px;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;

  > div {
    padding: 70px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const Horizontal = styled.div`
  gap: 16px;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ModalLogo = styled(ImExit)`
  width: 100px;
  height: 70px;
  border-radius: 50%;
  //box-shadow: rgba(100, 100, 111, 0.01) 0 7px 29px 0;
`;
export const ModalHeadline = styled.h2`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.87);
  mix-blend-mode: normal;
  opacity: 0.87;
`;
