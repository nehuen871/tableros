import React from 'react';
import Sidebar from '../navBar/navBar'
import {
    Outlet,
    useLocation
  } from "react-router-dom";
  export default class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log(this.props.roles_idroles);
        if(this.props.login != true){
            console.log("redirecciona");
            window.location.replace("/login");
        }
    }
    render() {
        return(
            <div className='row'>
                <div className="col-md-2">
                    <div className="col-sm-auto"><Sidebar roles_idroles={this.props.roles_idroles} login={this.props.login}/></div>
                </div>
                <div className='col-md-10'>
                    <Outlet roles_idroles={this.props.roles_idroles}/>
                </div>
            </div>
        )
    }
}