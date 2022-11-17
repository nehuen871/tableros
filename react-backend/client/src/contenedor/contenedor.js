import React from 'react';
import Sidebar from '../navBar/navBar'
import {
    Outlet
  } from "react-router-dom";
import UserContext,{ContextLogin,UserConsumer} from '../context/context'

export default class SidebarMenu extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        if(this.props.login != true){
            window.location.replace("/login");
        }
    }
    render() {
        return(
            <div className='row'>
                <div className="col-md-2">
                    <UserConsumer>
                        {
                            props => {
                                const {islogin,userIdRol,logIn,logOut} = this.context;
                                return(
                                    <div className="col-sm-auto"><Sidebar roles_idroles={userIdRol} login={islogin}/></div>
                                );
                            }
                        }
                        
                    </UserConsumer>
                </div>
                <div className='col-md-10'>
                    <Outlet roles_idroles={this.props.roles_idroles}/>
                </div>
            </div>
        )
    }
}