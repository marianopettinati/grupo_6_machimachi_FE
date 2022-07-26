import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Indicador.css"

class Indicador extends Component {

    constructor (props) {
        super(props);
        this.state = {
            total: 0,
        }
    }

    componentDidMount(){
        console.log("Soy el didMount")
        fetch ("http://localhost:3000/product/api/products")
            .then ( response => response.json())
            .then (data => {this.setState({cuenta : data.data.count})})
            .catch (error => console.log(error))
    }

    componentDidUpdate(){
        console.log("Soy el didUpdate")
    }

    render() {
        console.log ("Soy el render")

        let total;
        if (this.state.total = 0) {
            total = <p> 0 </p>
        } else {
            total = <p> { this.state.cuenta }</p>
        }

        return (
            <div className="indicador-wraper">
                <h1> PRODUCTOS </h1>                
                { total }
            </div>
            
        )
    }
};

export default Indicador