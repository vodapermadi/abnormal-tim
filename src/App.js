import React from "react";
import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./home/HomeComponent";
import VodaPortofolio from "./portofolio/VodaPortofolio";
import SabrinaPortofolio from "./portofolio/SabrinaPortofolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/portofolio/vodapermadi" element={<VodaPortofolio/>} />
          <Route path="/portofolio/sabrinautami" element={<SabrinaPortofolio/>} />
          {/* <Route path="/" element={<HomeComponent/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
