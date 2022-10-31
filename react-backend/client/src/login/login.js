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
let row = [];
class Login extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
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
    const settings = {
      method: 'POST',
      body: JSON.stringify(row[0]),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    };
    let url = "/auth";
    try {
        fetch(url,settings).then(res => res.json().then(
          data => this.setState({isLoggedIn: true})
          )
          );
    } catch (e) {
      console.log(e);
    }

    /*const response = fetch('/auth');
    var data = response.json();
    if (response.status !== 200) throw Error(data.message);
      this.setState({isLoggedIn: true});*/
  }
  
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let contenedor;
    if (isLoggedIn) {      
      contenedor = <Navigate to="/index/tablero"/>;
    } else {      
      contenedor =  <MDBContainer className="p-3 my-5 d-flex flex-column w-100"> 
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

    </MDBContainer>;    
    }
    return (
      <div>    
        {contenedor}      
      </div>
    );
  }
}

export default Login;
