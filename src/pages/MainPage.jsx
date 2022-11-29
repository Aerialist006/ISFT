import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import CurrLoc from "../utils/location";

const MainPage = ({ Main }) => {
  const route = CurrLoc();
  return (
    <>
      <Navbar name={route} user="Lucas Jair Lopez Tavarez" />
        <Main />
      <Footer />
    </>
  );
};

export default MainPage;
