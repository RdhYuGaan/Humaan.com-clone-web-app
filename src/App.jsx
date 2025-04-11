import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/work/pages/Work";
import Commercial  from "./pages/work/pages/Commercial";
import NonforProfit from "./pages/work/pages/NonforProfit";
import CommunityPurpose from "./pages/work/pages/CommunityPurpose";
import Innovation from "./pages/work/pages/Innovation";
import Ui from "./pages/work/pages/Ui";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/work" element={<Work />} />
         <Route path="/work/commercial" element={<Commercial />} />
         <Route path="/work/non-profit" element={<NonforProfit />} />
         <Route path="/work/community" element={<CommunityPurpose/>} />
         <Route path="/work/innovation" element={<Innovation />} />
         <Route path="/work/ui-ux" element={<Ui />} />

        {/* <Route path="expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />  */}

        
      </Routes>
    </Router>
  );
};

export default App;
