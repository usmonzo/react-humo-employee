import styled from 'styled-components';

export const MainTableContainer = styled.div`
  /* margin: 30px auto 80px auto; */
  max-width: 1220px;
`;

export const MainTableContent = styled.div`
  margin: 0 auto 80px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  border-top: 2px solid #e9ecef;
  border-bottom: 2px solid #e9ecef;
  border-right: 1px solid #e9ecee;
  border-left: 1px solid #e9ecee;
  box-shadow: inset 0 0 0 var(--thin-border) var(--input_border);
`;

export const MainTableTable = styled.table`
  width: 100%;
  border-radius: 12px;
  border-spacing: 0;
  background-color: #ffffff;

  th {
    text-align: left;
    padding: 14px 24px;
    background: #f3f2f7;
  }

  th:first-child {
    border-left: none;
    border-top-left-radius: 12px;
  }
  th:last-child {
    border-top-right-radius: 12px;
  }
  tr td {
    //border: 1px solid #333333;
    border-right: none;
    border-left: none;
    border-bottom: none;
    padding: 8px 25px;
    font-weight: 400;
    font-size: 15px;
  }

  tr td:first-child {
    border-left: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    line-height: 20px;
  }

  tbody tr td {
    border-top: 2px solid #e9ecef;
    border-radius: 20px;
  }
`;

export const EmptyRow = styled.div`
  /* margin-top: 100px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 12px;

  max-width: 1280px;
  height: 122px;

  /* Primary/50 */

  background: #fafafa;
  border-radius: 16px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const EmptyRowImg = styled.img`
  width: 45px;
  height: 45px;
`;
export const EmptyRowH1 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
`;
