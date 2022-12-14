import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  Navigate,
} from "react-router-dom";
import {useEffect,useState} from 'react';
import { LogintService } from './loginService';
import Contenedor from '../contenedor/contenedor';
import UserContext,{ContextLogin} from '../context/context'
let row = [];

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.logintService = new LogintService();
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogStatus = this.handleLogStatus.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      dataUser:null
    };
    this.isLoggedIn = false;
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleLoginClick() {
    row.push({
      quit: this.state.email,
      pass: this.state.password
    });
    this.logintService.getUser({row:row[0]}).then(data => this.setState({dataUser:data})).then(this.handleLogStatus());
  }
  handleLogStatus(){
    const {islogin,userIdRol,logIn,logOut} = this.context;
    
    if(this.state.dataUser != null){
      console.log(this.state.dataUser);
      logIn(true,this.state.dataUser.data.roles_idroles);
      this.isLoggedIn = true;
    }
  }
  handleLogoutClick() {
    const {islogin,userIdRol,logIn,logOut} = this.context;
    this.isLoggedIn = false;
    logOut();
  }
  render() {
    const isLoggedIn = this.isLoggedIn;

    return (
      <div>    
        {!isLoggedIn ? 
        <MDBContainer className="p-3 my-5 d-flex flex-column w-100"> 
        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={this.state.email || ""} onChange={this.handleEmailChange}/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={this.state.password || ""} onChange={this.handlePasswordChange}/>

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" onClick={this.handleLoginClick}>Sign in</MDBBtn>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>
        </div>
        </MDBContainer> : <Contenedor login={isLoggedIn} roles_idroles={this.state.dataUser.data.roles_idroles}/>
      }
      </div>
    );
  }
}

Login.contextType = UserContext;
export default Login;
