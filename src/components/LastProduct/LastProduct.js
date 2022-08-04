import React, { useEffect, useState } from "react";
import * as S from "./LastProduct.styles";

const LastProduct = () => {
    const [details, setDetails] = useState(0);

    useEffect (() => {
        fetch("http://localhost:3000/api/products")
            .then(response => response.json())
            .then(data => {                
                let productIndex = data.products.length -1
                setDetails(data.products[productIndex]);                   
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <S.LastProduct>
            <S.ProductDetails>{`Nombre: ${details.name}`}</S.ProductDetails>
            <S.ProductDetails>{`Precio: $${details.price}`}</S.ProductDetails>
            <S.ProductDetails>{`Descripción ${details.description}`}</S.ProductDetails>
            <S.ProductDetails>{`Genero: ${details.gender}`}</S.ProductDetails>
        </S.LastProduct>
    )
}

export default LastProduct;