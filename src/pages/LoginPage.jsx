import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer/Footer(e)';
import LoginBox from '../components/LoginBox/LoginBox';
import Navbar from '../components/Navbar/NavbarNoneLink.jsx';

export default function LoginPage() {
  const [title] = useState('Вход');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      if (JSON.parse(localStorage.getItem('token')) !== null) {
        // dispatch(setToktoken(JSON.parse(localStorage.getItem("token"))));
        navigate('/main');
      }
    }
  }, []);
  return (
    <>
      <Navbar />
      <LoginBox />
      <Footer position="fixed" />
    </>
  );
}
