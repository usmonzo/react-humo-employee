import styled from 'styled-components';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminNavigation from '../AdminNavigation/AdminNavigation';

const Container = styled.div`
  background-color: #ffffff;
`;
const Content = styled.div`
  height: 100vh;
`;
const AdminTableContainer = styled.div`
  overflow: hidden;
  max-width: 1180px;
  top: 150px;
  left: 290px;
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <AdminNavbar />
        <AdminNavigation />
        <AdminTableContainer>{children}</AdminTableContainer>
      </Content>
    </Container>
  );
};

export default Layout;
