import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Service from "./pages/services/Service";
import Career from "./pages/career/Career";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="service" element={<Service />} />
        <Route path="career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
