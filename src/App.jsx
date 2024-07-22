import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
