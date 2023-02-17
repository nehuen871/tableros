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
import ComentariosTableros from './comentarios/comentariosTable';
import Comentarios from './comentarios/comentarios';
import Home from './home/home';
import ContenedorHome from './contenedorhome/contenedorHome';
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="contenedorHome" element={<ContenedorHome />}>
            <Route path="tablero" element={<Tabla />}/>
            <Route path="usuarios" element={<Usuarios />}/>
            <Route path="roles" element={<Roles />}/>
            <Route path="powerbi/:token/:id" element={<PowerBiComponente />}/>
            <Route path="tablerosRoles" element={<RolesTableros />}/>
            <Route path="comentarios" element={<ComentariosTableros />}/>
            <Route path="enviarcomentarios/:idtablero" element={<Comentarios />}/>
            <Route path="contenedor" element={<Contenedor />}/>
            <Route path="home" element={<Home />}/>
          </Route>
        </Route>
      </Routes>
    );
  }
}

export default App;