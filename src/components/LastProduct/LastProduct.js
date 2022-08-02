import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import * as S from "./LastProduct.styles";

function LastProduct (props) {
    const [details, setDetails] = useState(0);

    useEffect (() => {
        fetch("http://localhost:3000/product/api/products")
            .then(response => response.json())
            .then(data => {                
                let productIndex = data.products.length -1
                setDetails(data.products[productIndex]);       
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <ul>
            <S.ProductDetails> { details.name } </S.ProductDetails>
            <S.ProductDetails> { details.price } </S.ProductDetails>
            <S.ProductDetails> { details.description } </S.ProductDetails>
            <S.ProductDetails> { details.gender } </S.ProductDetails>
        </ul>
    )
}

export default LastProduct;