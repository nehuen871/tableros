import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import withRouter from '../paramsUrl/paramsUrl';
import UserContext,{ContextLogin} from '../context/context';
import Moment from 'moment';
class Comentarios extends React.Component {
    emptyProduct = {
        message: "",
        categoria: "Error"
    };
    constructor(props) {
        super(props);
        this.state = {
            product : this.emptyProduct,
            value: 'Please write an essay about your favorite DOM element.',
            valueSelect: 'coconut'
        };
        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onInputChange(e,name){
        const val = (e.target && e.target.value) || '';
        let product = {...this.state.product};
        product[`${name}`] = val;

        this.setState({ product });
    }
    handleChange(event) {    
        this.setState({value: event.target.value}); 
        this.setState({valueSelect: event.target.value});
    }
    handleSubmit(e) {
        const {islogin,userIdRol,userId,logIn,logOut} = this.context;
        let data = {
            comentario: this.state.product.message,
            usuarios_idusuarios: userId,
            usuarios_roles_idroles: userIdRol,
            fecha:Moment().format('YYYY/MM/DD'),
            categoria:this.state.product.categoria,
            estado:"Abierto",
            tableros_idtableros:this.props.params.idtablero,
        };
        this.postData("/comentarios/insert/",{data});
        e.preventDefault();
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
    render() {
        return(
          <div >
            <form id='form' className='justify-content-between mx-auto text-center' style={{ width: '100%', maxWidth: '500px' }} onSubmit={this.handleSubmit} >
                <h2>Dejanos un comentario!</h2>
                <MDBTextArea wrapperClass='mb-4' label='Mensaje' onChange={(e) => this.onInputChange(e, 'message')} value={this.state.product.message}/>
                <label>Categoria: </label>
                <select onChange={(e) => this.onInputChange(e, 'categoria')} value={this.state.product.categoria} style={{marginLeft:"10px" }}>
                    <option>Error</option>
                    <option>Mejora</option>
                </select>
                <MDBBtn color='primary' block className='my-4'>
                    Emviar
                </MDBBtn>
            </form>
          </div> 
        );
    }
}

export default withRouter(Comentarios);
Comentarios.contextType = UserContext;