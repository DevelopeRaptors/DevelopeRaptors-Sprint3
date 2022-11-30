import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './Styles/ListaProductos.css';

import React from "react";

//Se importan los componentes creados
import Nav from './Components/Nav';
import IngresarProducto from './Components/IngresarProducto';
import VentasRealizadas from './Components/VentasRealizadas';
import SelecionarProductos from './Components/SelecionarProductos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route path='ingresarProducto' element={<IngresarProducto />} />
            <Route path='ventasRealizadas' element={<VentasRealizadas />} />
            <Route path='selecionarProductos' element={<SelecionarProductos />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;