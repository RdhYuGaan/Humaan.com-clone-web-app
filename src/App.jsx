import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";


;

const App = () => {
  return (
    <Router>
      
      <Home />
      <Routes>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
