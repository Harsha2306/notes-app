import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header title="My Notes App" />
      <Outlet />
    </>
  );
};

export default RootLayout;
