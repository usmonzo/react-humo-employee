import styled from 'styled-components';

export const InnCheckContent = styled.div`
  max-width: 700px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  padding: 32px;
  border-radius: 12px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.006em;
    color: #4b4b4b;
    mix-blend-mode: normal;
    opacity: 0.87;
  }
  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.6);
    mix-blend-mode: normal;
    opacity: 0.87;
  }
`;

export const InnHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    justify-self: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 28px;
    letter-spacing: -0.006em;
    color: #212121;
    text-align: center;
    margin-bottom: 17px;
  }
  div {
    width: 30px;
  }
`;
