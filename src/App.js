import React from "react";
import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./home/HomeComponent";
import VodaPortofolio from "./portofolio/VodaPortofolio";
import SabrinaPortofolio from "./portofolio/SabrinaPortofolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/abnormal-tim" element={<HomeComponent/>} />
          <Route path="/portofolio/vodapermadi" element={<VodaPortofolio/>} />
          <Route path="/portofolio/sabrinautami" element={<SabrinaPortofolio/>} />
          {/* <Route path="/" element={<HomeComponent/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
