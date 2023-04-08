import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Script from './component/Scripts';
import Home from './pages/landing-page/Home';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generic from './pages/info-page/Generic';

function App() {
  return (
    <>
      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/orison/" element={<Home />} />
            <Route exact path="/orison/generic" element={<Generic />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </>
      <Script />
    </>
  );
}

export default App;
