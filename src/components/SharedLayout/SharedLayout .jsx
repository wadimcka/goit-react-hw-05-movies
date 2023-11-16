import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBtn, NavList } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavBtn to="/">Home</NavBtn>
            </li>
            <li>
              <NavBtn to="/movies">Movies</NavBtn>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
