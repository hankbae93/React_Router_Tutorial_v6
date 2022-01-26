import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';
import NavBar from './NavBar';

const Wrapper = styled.div`
  padding: 0 1rem;
`

const Layout = () => {
  return (
    <Wrapper>
      <header style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Ranja React-Router-Dom v6 tutorial</h1>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};

export default Layout;
