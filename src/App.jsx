import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";


;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} /> */}

        
      </Routes>
    </Router>
  );
};

export default App;
