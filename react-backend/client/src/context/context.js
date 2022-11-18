import React,{Component} from 'react';
const UserContext = React.createContext();
export const UserConsumer = UserContext.Consumer;
export class ContextLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            islogin: false,
            userIdRol: 0
        }
    }


    logIn = (log,rol) => {
        this.setState({
            islogin:log,
            userIdRol:rol
        });
    }
    logOut = () => {
        this.setState({
            islogin:false,
            userIdRol:0
        });
    }
    render(){
        const {islogin,userIdRol} = this.state
        const {logIn,logOut} = this;
        return(
            <UserContext.Provider value={{
                islogin,
                userIdRol,
                logIn,
                logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    };
}
export default UserContext;