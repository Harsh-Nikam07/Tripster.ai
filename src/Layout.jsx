// src/Layout.jsx
import Header from './components/custom/Header';
import Footer from './components/custom/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the child route components */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
