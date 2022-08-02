import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
// import * as S from "./ProductDetails.styles";

function Detail (props) {
    const [details, setDetails] = useState(0);

    useEffect (() => {
        fetch("http://localhost:3000/product/api/products")
            .then(response => response.json())
            .then(data => {                
                let productsArray = []
                data.products.forEach(element => {
                    productsArray.push(element.name);
                });
                console.log(productsArray);
                setDetails(productsArray);       
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <ul>
            { details.map((element) => <li> { element } </li>)}        
        </ul>
    )
}

export default Detail;