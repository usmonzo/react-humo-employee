import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
`;

export const AdminTableContent = styled.div`
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

export const AdminTableTable = styled.table`
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
    padding: 20px 25px;
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
