import React from "react";
import { BrowserRouter as Router, Routes, Route, useOutletContext } from "react-router-dom";
import MainPage from "./pages/MainPage"
import "./css/index.css";
import Home from "./pages/Home"
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>hola 404</h1>} />
        <Route path="/" element={<MainPage Main={Home}/>} />
        <Route path="/pensum" element={<MainPage Main={Home}/>} />
        <Route path="/noticias" element={<MainPage Main={Home}/>} />
        <Route path="/nosotros" element={<MainPage Main={Home}/>} />
        <Route path="/notas" element={<MainPage Main={Home}/>} />
        <Route path="/admisiones" element={<MainPage Main={Home}/>} />
        <Route path="/login" element={<MainPage Main={Home}/>} />
      </Routes>
    </Router>
  );
};
