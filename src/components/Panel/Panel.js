import React, { useEffect, useState } from "react";
import * as S from "./Panel.styles.js";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Panel = ({
    Type
}) => {
    const [quantityProducts, setQuantityProducts] = useState([0]);
    const [quantityUsers, setQuantityUsers] = useState([0]);
    const [categories, setCategories] = useState([0]);
    const [lastUser, setLastUser] = useState([0]);

    useEffect (() => {
        fetch("http://localhost:3000/product/api/products")
            .then(response => response.json())
            .then(data => {
                setQuantityProducts ([data.count]);
                setCategories ([data.countByGenres.length])
            })
            .catch(err => console.log(err))
    }, [])

    useEffect (() => {
        fetch("http://localhost:3000/user/api/users")
            .then(response => response.json())
            .then(data => {
                setQuantityUsers ([data.count])
                let userPosition = data.data.length -1 
                let user = data.data[userPosition].name + ' ' + data.data[userPosition].last_name 
                setLastUser ([user])

            })
            .catch(err => console.log(err))
    }, [])
    

   
    const renderInformation = () => {
        if(Type==='quantityProducts'){
            return {
                title: `Productos`, 
                description: `${quantityProducts}`
            };
        }
        if(Type==='quantityUsers'){
            return {
                title: `Usuarios`, 
                description: `${quantityUsers}`
            };
        }
        if(Type==='categories'){
            return {
                title: `Categorías`, 
                description: `${categories}`
            };
        }
        if(Type==='lastUser'){
            return {
                title: `Último usuario creado`, 
                description: `${lastUser}`
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