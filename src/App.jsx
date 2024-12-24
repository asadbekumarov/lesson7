import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Service from "./pages/services/Service";
import Career from "./pages/career/Career";
import NotFound from "./components/notFound/NotFound";
import Layout from "./pages/layout/Layout";
import Login from "./components/login/Login";
import Detail from "./components/detail/Detail";
import Model from "./components/model/Model";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="service" element={<Service />} />
          <Route path="career" element={<Career />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="model" element={<Model />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
