import React, { useEffect, useState } from "react";
import * as S from "./Panel.styles.js";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

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
    }, [])

    useEffect (() => {
        fetch("http://localhost:3000/user/api/users")
            .then(response => response.json())
            .then(data => {
                setQuantityUsers ([data.count])
            })
            .catch(err => console.log(err))
    }, [])
    

    const renderInformation = () => {
        if(Type==='quantityProducts'){
            return {
                title: `Cantidad de productos`, 
                description: `${quantityProducts}`
            };
        }
        if(Type==='quantityUsers'){
            return {
                title: `Cantidad de usuarios`, 
                description: `${quantityUsers}`
            };
        }
    }
    

    return (
        <S.Panel>
            <Card title={renderInformation().title} description={renderInformation().description}/>        
        </S.Panel>
    )
};
/*
Panel.PropTypes = {
    Type: PropTypes.oneOf['quantityProducts', 'quantityUsers'],
}
*/
export default Panel;