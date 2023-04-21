import React from 'react';
import './App.css';
// import Footer from './component/Footer';
import Script from './component/Scripts';
import Home from './pages/landing-page/Home';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from './pages/info-page/Creation/Creation'

function App() {
  return (
    <>
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/creation" element={<Creation />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
        {/* <Footer /> */}
      </>
      <Script />
    </>
  );
}

export default App;
