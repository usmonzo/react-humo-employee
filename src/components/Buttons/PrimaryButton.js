import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: #ff6200;
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
  border: none;
  cursor: pointer;
  box-shadow: RGBA(255, 120, 10, 0.1) 0 10px 7px 0;

  :hover {
    box-shadow: rgba(255, 115, 0, 0.5) 0 5px 15px 0;
    //background-color: #cd4d15;
    transition: all 0.2s ease-out;
  }

  :active {
    background-color: #d84b0f;
    transition: all 0.2s ease-out;
  }
`;
