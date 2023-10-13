import React from "react";
import Header from "../components/Header";
import Palestine from "../pages/Palestine";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <Palestine />
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}
