import React from 'react';
import './App.css';
// import Footer from './component/Footer';
import Script from './component/Scripts';
import Home from './pages/landing-page/Home';
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from './pages/info-page/Creation/Creation'
import Void from './pages/info-page/Void/Void'
import Law from './pages/info-page/Law/Law';
import Afterlife from './pages/info-page/Law/Afterlife';
import PlaneOfDreams from './pages/info-page/Law/PlaneOfDreams';
import Mechanus from './pages/info-page/Law/Mechanus';
import Nirvana from './pages/info-page/Law/Nirvana';
import LibraryOfAllKnowledge from './pages/info-page/Law/LibraryOfAllKnowledge';

function App() {
  return (
    <>
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/creation" element={<Creation />} />
            <Route exact path="/void" element={<Void />} />
            <Route exact path="/law" element={<Law />} />
            <Route exact path="/law/afterlife" element={<Afterlife />} />
            <Route exact path="/law/plane-of-dreams" element={<PlaneOfDreams />} />
            <Route exact path="/law/mechanus" element={<Mechanus />} />
            <Route exact path="/law/nirvana" element={<Nirvana />} />
            <Route exact path="/law/library-of-all-knowledge" element={<LibraryOfAllKnowledge />} />
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
