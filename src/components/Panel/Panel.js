import React, { useEffect, useState } from "react";
import * as S from "./Panel.styles.js";
import Card from "../Card/Card";

const Panel = ({
    Type
}) => {
    const [quantityProducts, setQuantityProducts] = useState([0]);
    const [quantityUsers, setQuantityUsers] = useState([0]);

    useEffect (() => {
        fetch("http://localhost:3000/product/api/products")
            .then(response => response.json())
            .then(data => {
                setQuantityProducts ([data.count])
            })
            .catch(err => console.log(err))
    }, [] )

    useEffect (() => {
        fetch("http://localhost:3000/user/api/users")
            .then(response => response.json())
            .then(data => {
                setQuantityUsers ([data.count])
            })
            .catch(err => console.log(err))
    }, [] )
    
    let description;

    const renderDescription = () => {
        if(Type=='quantityProducts'){
            return description = `La cantidad de productos en la web actualmente es de ${quantityProducts}`;
        }
        if(Type=='quantityUsers'){
            return description = `La cantidad de usuarios en la web actualmente es de ${quantityUsers}`;
        }
    }

    let title;
    const renderTitle = () => {
        if(Type=='quantityProducts'){
            return title = `Productos`;
        }
        if(Type=='quantityUsers'){
            return title = `Usuarios`;
        }
    }

    

    return (
        <S.Panel>
            <Card title={renderTitle()} description={renderDescription()}/>        
        </S.Panel>
    )
};

export default Panel;