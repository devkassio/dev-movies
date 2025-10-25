import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../components/Footer';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
