import React, { useEffect, useState } from "react";
import "./Indicador.css";

function Indicador () {
    const [productos, setProductos] = useState ([]);

    useEffect (() => {
        console.log("soy el FETCH")
        fetch("http://localhost:3000/product/api/products")
            .then (response => response.json())
            .then (data => {
                console.log(data)
                setProductos (data.results)
            })
            .catch(err => console.log(err))
    }, [] )

    return (
        <div className="indicador-wraper">
            <h1> PRODUCTOS </h1>                
            { productos }
        </div>        
    )
};

export default Indicador