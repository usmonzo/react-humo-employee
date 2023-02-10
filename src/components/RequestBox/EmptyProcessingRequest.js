import styled from "styled-components";

export const RequestContainer = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 54px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 16px;
`;
export const RequestContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* gap: 36.4px; */
`;
export const RequestH1 = styled.h1`
  width: 240px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.38);
  padding-right: 20px;
  /* margin-right: 70px; */
`;
// export const RequestImage = styled.img`
//   width: 48px;
//   height: 48px;
// `;
export const RequestInfoGroup = styled.div`
  display: flex;
  flex-direction: column;

  > h5 {
    text-align: left;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.006em;
    color: rgba(0, 0, 0, 0.38);
  }
`;

export const EmptyRequestButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 100px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 50px;
`;
