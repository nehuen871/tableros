import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  export default class Comentarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Please write an essay about your favorite DOM element.',valueSelect: 'coconut'};
        this.postData = this.postData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        this.setState({value: event.target.value}); 
        this.setState({valueSelect: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.valueSelect);
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
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
          <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.props.roles_idroles} />
                <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <label>Essay:<textarea value={this.state.value} onChange={this.handleChange} /></label>
                <input type="submit" value="Submit" />
            </form>
          </div> 
        );
    }
}