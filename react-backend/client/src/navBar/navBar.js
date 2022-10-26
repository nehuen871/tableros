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
              <SubMenu title="Components">
                <MenuItem>Component 1</MenuItem>
                <SubMenu title="Sub Component 1">
                  <MenuItem><Link to="/index/abm">ABM</Link></MenuItem>
                  <MenuItem><Link to="/index/tablero">Tablero</Link></MenuItem>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      </div> 
    );
  }
}