import styled from 'styled-components';

export const SecondaryBtn = styled.button`
  width: 100%;
  background: #ffffff;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px 40px; */
  height: 48px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.07) 0 10px 7px 0;

  :hover {
    box-shadow: rgba(100, 100, 111, 0.29) 0 8px 15px 0;
    transition: 0.2s ease-in;
  }
`;
