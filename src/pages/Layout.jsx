import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/common/Footer';
import NavLink from '../components/common/NavLink';

const Layout = () => {
  return (
    <>
    <header>
      <NavLink />
    </header>

    <main>
      <Outlet />
      {/* {children} */}
    </main>

    <footer>
      <Footer />
    </footer>
    </>
  );
};

export default Layout;
