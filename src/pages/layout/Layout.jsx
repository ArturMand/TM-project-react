import React from 'react';
import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import {Navigation} from '../../components/Navigation/Navigation'
export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box as="header" top="0" width="100%" py={5}>
        <Box px={4} display="flex" justifyContent="space-between">
          <Logo />
          {isLoggedIn && <UserMenu />}
        </Box>
      </Box>
    <Navigation/>
      <Outlet />
    </>
  );
};
