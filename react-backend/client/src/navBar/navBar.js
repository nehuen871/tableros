import React,{ useState } from 'react'
import { ProductService } from '../rolesTableros/ProductService';
import { TableroService } from '../tablero/ProductService';
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
  constructor(props) {
    super(props);
    this.navegacion = [];
    this.state = {
      isLoggedIn: false,
      dataUser:null
    };
    let data1 = [];
    this.productService = new ProductService();
    this.tableroService = new TableroService();
    this.handleLogStatus = this.handleLogStatus.bind(this);
    this.postData = this.postData.bind(this);
}
async postData(url = '', data = {}) {
  let i = 0;
  const that = this;
  // Default options are marked with *
  await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header 
  }).then(function(response) {
    return response.json();
    }).then(function(jsonStr) {
    that.setState({ dataUser: jsonStr });
  });
  /**/
  //return response.json(); // parses JSON response into native JavaScript objects
}
componentDidMount() {
  this.postData('/tablerosroles/gettablerosroles/',{roles_idroles:this.props.roles_idroles});
  this.handleLogStatus();
}
handleLogStatus(){
  if(this.props.roles_idroles != null){
    this.setState({isLoggedIn: true});
  }
}
/**               {this.data1.map((value, index) => {
                  return value;
                })}
                })} */
  render() {
    let i = 0;
    let renderLinks = [];
    const { dataUser } = this.state;
    dataUser && console.log(dataUser.data.map(item => item));
    return(
      <div>
        <div>
            <Sidebar>
            <Menu iconShape="square">
              {dataUser && dataUser.data.map(item =>  <MenuItem><Link to={"/index/powerbi/"+item.accessToken+"/"+item.id}>{item.nombre}</Link></MenuItem> )}
              
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