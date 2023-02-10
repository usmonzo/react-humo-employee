import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoSvg from '../../../assets/NavbarLogo.svg';
import doc from '../../img/documents.svg';
import branches from '../../img/branches.svg';
import portfolio from '../../img/portfolio.svg';
import reports from '../../img/reports.svg';
import stats from '../../img/stats.svg';
import underwriter from '../../img/underwriter.svg';
import underwriters from '../../img/underwriters.svg';

const AdminNavbarContainer = styled.div`
  width: 280px;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  background: #fafafa;
  border: 1px solid #f5f5f5;
  padding: 40px 24px;
`;

const AdminNavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 40px;
    align-self: flex-start;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #757575;
  }
`;
const AdminNavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 30px;

  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.415px;
    color: #ff6200;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  padding-top: 25px;
`;

const LinkGroup = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 0 14px 16px;
  width: 220px;
  height: 50px;
  gap: 15px;
  /* border: 1px solid #f26526; */
  border-radius: 12px;

  h2 {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #757575;
  }
`;

const AdminNavbar = () => {
  return (
    <AdminNavbarContainer>
      <AdminNavbarContent>
        <AdminNavbarLogo>
          <img src={logoSvg} alt="logo" />
          <span>Андеррайтер</span>
        </AdminNavbarLogo>
        <NavbarLinks>
          <LinkGroup>
            <img src={doc} alt="doc" />
            <h2>Заявки</h2>
          </LinkGroup>
          <LinkGroup>
            <img src={underwriters} alt="doc" />
            <h2>Андеррайтеры</h2>
          </LinkGroup>
          <LinkGroup>
            <img src={reports} alt="doc" />
            <h2>Отчеты</h2>
          </LinkGroup>
        </NavbarLinks>
        <h3>Статистика</h3>
        <NavbarLinks>
          <LinkGroup>
            <img src={portfolio} alt="doc" />
            <h2>Общий портфель</h2>
          </LinkGroup>
          <LinkGroup>
            <img src={underwriter} alt="doc" />
            <h2>По андеррайтерам</h2>
          </LinkGroup>
          <LinkGroup>
            <img src={stats} alt="doc" />
            <h2>По заявкам</h2>
          </LinkGroup>
          <LinkGroup>
            <img src={branches} alt="doc" />
            <h2>По филиалам</h2>
          </LinkGroup>
        </NavbarLinks>
      </AdminNavbarContent>
    </AdminNavbarContainer>
  );
};

export default AdminNavbar;
