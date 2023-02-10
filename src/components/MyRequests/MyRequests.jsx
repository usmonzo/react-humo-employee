import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { currentApplication } from '../../store/slices/applicationsSlice';
import MainTable from '../MainTable/MainTable';

const Container = styled.div`
  background: #edeef0;
  @media screen and (max-width: 490px) {
    padding-top: 80px;
  }
`;

const Content = styled.div`
  margin: 0 auto 20px auto;
  max-width: 1280px;
  padding: 0 30px;
  width: 100%;
`;

const Headline = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: rgba(0, 0, 0, 0.87);
`;
export const Group = styled.div`
  margin-top: 34px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NumBtn = styled.button`
  margin-left: 10px;
  color: #757575;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  border: none;
  width: 48px;
  height: 48px;
  background: #eeeeee;
  border-radius: 55px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const MyRequests = () => {
  const cachedApplication = useSelector(currentApplication);

  return (
    <Container>
      <Content>
        <Group>
          <Headline>Мои заявки</Headline>
          <NumBtn>{cachedApplication?.length}</NumBtn>
        </Group>
        <MainTable />
      </Content>
    </Container>
  );
};

export default MyRequests;
