import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/Footer/Footer(e)';
import InnCheck from '../components/InnCheck/innCheck';
import Navbar from '../components/Navbar/Navbar(e)';

// const [title] = useState('Вход');
// const navigate = useNavigate();

// useEffect(() => {
//   document.title = title;
// }, [title]);

// useEffect(() => {
//   if (localStorage.getItem('token')) {
//     if (JSON.parse(localStorage.getItem('token')) !== null) {
//       // dispatch(setToktoken(JSON.parse(localStorage.getItem("token"))));
//       navigate('/main');
//     }
//   }
// }, []);

const InnCheckinng = () => {
  return (
    <>
      <Navbar />
      <InnCheck />
      <Footer position="fixed" />
    </>
  );
};

export default InnCheckinng;
