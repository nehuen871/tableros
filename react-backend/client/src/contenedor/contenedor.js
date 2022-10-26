import React from 'react';
import Sidebar from '../navBar/navBar'
import Tablero from "../tablero/tablero";
import PowerBiComponente from "../powerBi/powerBi"
import {
    Outlet,
  } from "react-router-dom";
export default class SidebarMenu extends React.Component {
    render() {
        return(
            <div className='row'>
                <div className="col-md-2">
                    <div className="col-sm-auto"><Sidebar /></div>
                </div>
                <div className='col-md-10'>
                    <Outlet />
                </div>
            </div>
        )
    }
}
/**
<div class="col-md-10"><Tablero /></div>
<div class="Embed-container col-md-10">
    <PowerBiComponente />
</div>*/