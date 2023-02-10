import { useEffect, useState } from 'react';
import MainBody from '../components/MainBody/MainBody';
import Navbar from '../components/Navbar/Navbar(e)';

export default function MainPage() {
  const [title] = useState('Необработанные');

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Navbar />
      <MainBody />
    </>
  );
}
