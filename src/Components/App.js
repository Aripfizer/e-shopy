import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
          </Routes>
          <Footer/>

      </>

  );
}

export default App;
