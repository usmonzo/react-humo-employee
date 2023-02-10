import { Button } from '@chakra-ui/react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  /* background: #fafafafa; */
  background: #ffffff;
  /* border: 1px solid black; */
  /* position: relative; */
  top: 0;
  right: 0;
  left: 0;
  /* left: 280px; */
  width: 1190px;
`;
const NavigationContent = styled.div`
  height: 128px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationHeadline = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.006em;
  color: rgba(0, 0, 0, 0.87);
`;
const BtnGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const AdminNavigation = () => {
  return (
    <NavigationContainer>
      <NavigationContent>
        <NavigationHeadline>Заявки</NavigationHeadline>
        <BtnGroup>
          <Button></Button>
          <Button></Button>
        </BtnGroup>
      </NavigationContent>
    </NavigationContainer>
  );
};

export default AdminNavigation;
