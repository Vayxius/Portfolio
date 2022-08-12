import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainApp } from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
};

export default Rute;