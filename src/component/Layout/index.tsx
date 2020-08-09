import { Box, Container } from '@material-ui/core/';
import { Header } from '@src/component/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        <Box mt={4}>{children}</Box>
      </Container>
    </>
  );
};
