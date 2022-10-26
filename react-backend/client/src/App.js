import React, { Component } from 'react';
import './App.css';
import {
  Routes,Route
} from "react-router-dom";
import Tabla from "./tablero/tablero";
import PowerBiComponente from "./powerBi/powerBi"
import Login from './login/login';
import ErrorPage from "./error-page";
import Contenedor from './contenedor/contenedor'
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/index" element={<Contenedor />}>
          <Route path="abm" element={<Tabla />}/>
          <Route path="tablero" element={<PowerBiComponente />}/>
        </Route>
      </Routes>
    );
  }
}

export default App;