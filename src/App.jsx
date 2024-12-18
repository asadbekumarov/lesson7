import React from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Service from "./components/service/Service";
import Company from "./components/company/Company";
import Career from "./components/career/Career";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <Company />
      <Career />
      <Footer />
    </div>
  );
}

export default App;
