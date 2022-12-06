import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage"
import "./css/index.css";
import Home from "./pages/Home";
import NotasVista from "./pages/NotasVista"
import NotasPublicar from "./pages/NotasPublicar";
import Login from "./pages/Login"
import Pensum from "./pages/Pensum";
import Null from "./pages/Null";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import AboutUs from "./pages/AboutUs";
import Admisiones from "./pages/Admisiones";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1>hola 404</h1>} />
        <Route path="/" element={<MainPage Main={Home}/>} />
        <Route path="/pensum" element={<MainPage Main={Pensum}/>} />
        <Route path="/noticias" element={<MainPage Main={News}/>} />
        <Route path="/nosotros" element={<MainPage Main={AboutUs}/>} />
        <Route path="/notas/publicar" element={<MainPage Main={NotasPublicar}/>} />
        <Route path="/notas/vista" element={<MainPage Main={NotasVista}/>} />
        <Route path="/admisiones" element={<MainPage Main={Admisiones}/>} />
        <Route path="/login" element={<MainPage Main={Login}/>} />
        <Route path="/noticias:id" element={<MainPage Main={NewsDetails}/>}/> 
      </Routes>
    </Router>
  );
};
