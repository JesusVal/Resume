import React from "react";
import About from "./resources/about/About";
import Experience from "./resources/experience/Experience";
import Header from "./resources/header/Header";
import Navbar from "./resources/navbar/Navbar";
import Services from "./resources/services_comp/Services";

const Resume = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services/>
    </>
  );
};

export default Resume;
