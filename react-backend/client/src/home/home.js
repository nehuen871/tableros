import React from 'react';
import {
    Outlet
  } from "react-router-dom";
import UserContext,{ContextLogin,UserConsumer} from '../context/context'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default class Home extends React.Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        const {islogin,userIdRol,logIn,logOut} = this.context;
        if(islogin != true){
            //window.location.replace("/login");
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
                                    <div className="col-sm-auto">
                                        <MDBCard alignment='center'>
                                        <MDBCardHeader>Featured</MDBCardHeader>
                                        <MDBCardBody>
                                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                                            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                                            <MDBBtn href='#'>Button</MDBBtn>
                                        </MDBCardBody>
                                        <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                                        </MDBCard>
                                    </div>
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