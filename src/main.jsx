import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import store from './state/store.js'
import { Provider } from 'react-redux';

import './index.css'
import './style/customStyle.css';
import Home from './Pages/Home.jsx'
import ListaCumpleaneros from './Pages/ListaCumpleaneros.jsx';
import ListaPersonas from './Pages/ListaPersonas.jsx';
import AgregarPersona from './Pages/AgregarPersona.jsx';
import ActualizarPersona from './Pages/ActualizarPersona.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cumpleaneros" element={<ListaCumpleaneros />} />
          <Route path="/AgregarPersona" element={<AgregarPersona />} />
          <Route path="/Personas" element={<ListaPersonas />} />
          <Route path="/ActualizarPersona" element={<ActualizarPersona />} />
        </Routes>
      </BrowserRouter>
    </Provider >
  </StrictMode>

)
