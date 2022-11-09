import React,{ useState } from 'react'
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu
} from "react-pro-sidebar";
import {
  BrowserRouter as Router,
  Outlet,
  Link
} from "react-router-dom";

export default class SidebarMenu extends React.Component {
  render() {
    return(
      <div>
        <div>
            <Sidebar>
            <Menu iconShape="square">
              <MenuItem><Link to="/index/powerbi">PowerBi</Link></MenuItem>
                <SubMenu title="Sub Component 1" label="ABM">
                  <MenuItem><Link to="/index/usuarios">Usuarios</Link></MenuItem>
                  <MenuItem><Link to="/index/roles">Roles</Link></MenuItem>
                  <MenuItem><Link to="/index/tablero">Tableros</Link></MenuItem>
                  <MenuItem><Link to="/index/tablerosRoles">Tableros Roles</Link></MenuItem>
                  
                </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div> 
    );
  }
}