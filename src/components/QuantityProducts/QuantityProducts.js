import React, { useEffect, useState } from "react";
import * as S from "./QuantityProducts.styles.js";
import Card from "../Card/Card";

function QuantityProducts () {
    const [quantityProducts, setQuantityProducts] = useState ([0]);

    useEffect (() => {
        fetch("http://localhost:3000/product/api/products")
            .then (response => response.json())
            .then (data => {
                console.log(data)
                setQuantityProducts ([data.count])
            })
            .catch(err => console.log(err))
    }, [] )

    const description = `La cantidad de productos actualmente es de ${quantityProducts}`;

    return (
        <S.QuantityProducts>
            <Card title='Productos' description={description}/>        
        </S.QuantityProducts>
    )
};

export default QuantityProducts;