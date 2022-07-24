import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
