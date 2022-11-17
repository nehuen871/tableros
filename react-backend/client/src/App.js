import React, { Component } from 'react';
import './App.css';
import {
  Routes,Route
} from "react-router-dom";
import Tabla from "./tablero/tablero";
import PowerBiComponente from "./powerBi/powerBi";
import Login from './login/login';
import ErrorPage from "./error-page";
import Contenedor from './contenedor/contenedor';
import Usuarios from  './usuarios/tablero';
import Roles from './roles/tablero';
import RolesTableros from './rolesTableros/tablero';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Contenedor />}>
          <Route path="tablero" element={<Tabla />}/>
          <Route path="usuarios" element={<Usuarios />}/>
          <Route path="roles" element={<Roles />}/>
          <Route path="powerbi/:token/:id" element={<PowerBiComponente />}/>
          <Route path="tablerosRoles" element={<RolesTableros />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    );
  }
}

export default App;