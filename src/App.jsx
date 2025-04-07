import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from "./components/Hero";


;

const App = () => {
  return (
    <Router>
      
      <Hero />
      <Routes>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
