import React from "react";
import { BrowserRouter as Router, Routes, Route, useOutletContext } from "react-router-dom";
import MainPage from "./pages/MainPage"
import "./css/index.css";
import Home from "./pages/Home"
import Null from "./pages/Null"
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>hola 404</h1>} />
        <Route path="/" element={<MainPage Main={Home}/>} />
        <Route path="/pensum" element={<MainPage Main={Null}/>} />
        <Route path="/noticias" element={<MainPage Main={Null}/>} />
        <Route path="/nosotros" element={<MainPage Main={Null}/>} />
        <Route path="/notas" element={<MainPage Main={Null}/>} />
        <Route path="/admisiones" element={<MainPage Main={Null}/>} />
        <Route path="/login" element={<MainPage Main={Null}/>} />
      </Routes>
    </Router>
  );
};
