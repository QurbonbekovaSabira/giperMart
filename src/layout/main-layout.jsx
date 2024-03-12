import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-col justify-between">
        <header>
          <Header />
        </header>
        <main className="pt-[150px]">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
