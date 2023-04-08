import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Script from './component/Scripts';
import Home from './pages/landing-page/Home';
import NavBar from './component/NavBar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Generic from './pages/info-page/Generic';

function App() {
  return (
    <>
      <>
        <NavBar />
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/generic" element={<Generic />} />
          </Routes>
        </HashRouter>
        {/* <Footer /> */}
      </>
      <Script />
    </>
  );
}

export default App;
