import { useEffect, useState } from 'react';
import ClientCheck from '../components/ClientCheck/ClientCheck';
import Footer from '../components/Footer/Footer(e)';
import Navbar from '../components/Navbar/Navbar(e)';

const ClientsCheckPage = () => {
  const [title] = useState('Идентификация Х.О');

  useEffect(() => {
    window.title = title;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ClientCheck />
      <Footer />
    </>
  );
};

export default ClientsCheckPage;
