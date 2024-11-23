import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import Home from './Pages/Home.jsx'
import ListaCumpleaneros from './Pages/ListaCumpleaneros.jsx';
import ListaPersonas from './Pages/ListaPersonas.jsx';
import AgregarPersona from './Pages/AgregarPersona.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cumpleaneros" element={<ListaCumpleaneros />} />
      <Route path="/AgregarPersona" element={<AgregarPersona />} />
      <Route path="/Personas" element={<ListaPersonas />} />
    </Routes>
   </BrowserRouter>
  </StrictMode>
)
