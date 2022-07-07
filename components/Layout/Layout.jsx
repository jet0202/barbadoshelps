import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Barbados Helps</title>
        <meta name="description" content="Barbados Helps" />
        <link rel="icon" href="/heart.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
