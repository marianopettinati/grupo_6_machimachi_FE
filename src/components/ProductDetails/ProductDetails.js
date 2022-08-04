import React, { useEffect, useState } from "react";
import * as S from "./ProductDetails.styles";

function ProductDetail () {
    const [details, setDetails] = useState([]);

    useEffect (() => {
        fetch("http://localhost:3000/api/products")
            .then(response => response.json())
            .then(data => {                
                let productsArray = []
                data.products.forEach(element => {
                    productsArray.push(element.name);
                });
                setDetails(productsArray);       
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <ul>
            { details.map((element, i) => <S.Product> {i+1}) { element } </S.Product>)}        
        </ul>
    )
}

export default ProductDetail;