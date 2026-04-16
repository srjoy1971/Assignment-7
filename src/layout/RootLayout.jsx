import React from 'react';
import { Outlet } from "react-router";
import Navber from '../components/shared/Navber';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  );
};

export default RootLayout;