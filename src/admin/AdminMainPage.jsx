import styled from 'styled-components';
import Layout from './files/AdminLayout/Layout';
import AdminNavbar from './files/AdminNavbar/AdminNavbar';
import AdminNavigation from './files/AdminNavigation/AdminNavigation';
import AdminTable from './files/AdminTable/AdminTable';

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const AdminMainPage = () => {
  return (
    <div>
      <Content>
        <Layout>
          <AdminTable />
        </Layout>
      </Content>
    </div>
  );
};

export default AdminMainPage;
