// src/pages/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Renders the nested route components */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
