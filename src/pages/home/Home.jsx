import React from "react";
import Hero from "../../components/hero/Hero";
import Service from "../../components/service/ServiceCom";
import Company from "../../components/company/CompanyComponent";
import Career from "../../components/career/CareerCom";

const Home = () => {
  return (
    <main>
      <Hero />
      <Service />
      <Company />
      <Career />
    </main>
  );
};

export default Home;
