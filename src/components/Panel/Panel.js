import React, { useEffect, useState } from "react";
import * as S from "./Panel.styles.js";
import Card from "../Card/Card";

const Panel = ({
    Type
}) => {
    const [quantityProducts, setQuantityProducts] = useState([0]);
    const [quantityUsers, setQuantityUsers] = useState([0]);
    const [quantitycategories, setquantityCategories] = useState([0]);
    const [lastUser, setLastUser] = useState([0]);
    const [quantityGenreNiñas, setQuantityGenreNiñas] = useState([0]);
    const [quantityGenreNiños, setQuantityGenreNiños] = useState([0]);
    const [quantityProductSale, setQuantityProductSale] = useState([0]);

    useEffect (() => {
        fetch("http://localhost:3000/api/products")
            .then(response => response.json())
            .then(data => {                
                setQuantityProducts([data.count]);
                setquantityCategories([data.countByGenres.length]);
                setQuantityGenreNiñas([data.countByGenres[1].niñas]);
                setQuantityGenreNiños([data.countByGenres[0].niños]);
                setQuantityProductSale([data.countBySale]);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect (() => {
        fetch("http://localhost:3000/api/users")
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
        if(Type==='quantityCategories'){
            return {
                title: `Cantidad de categorías`, 
                description: `${quantitycategories}`
            };
        }
        if(Type==='lastUser'){
            return {
                title: `Último usuario creado`, 
                description: `${lastUser}`
            };
        }
        if(Type==='quantityGenreNiñas'){
            return {
                title: `Niñas`, 
                description: `${quantityGenreNiñas}`
            };
        }
        if(Type==='quantityGenreNiños'){
            return {
                title: `Niños`, 
                description: `${quantityGenreNiños}`
            };
        }
        if(Type==='quantityProductsSale'){
            return {
                title: `Cantidad de descuentos`, 
                description: `${quantityProductSale}`
            };
        }
    }
    

    return (
        <S.Panel>
            <Card title={renderInformation().title} description={renderInformation().description}/>        
        </S.Panel>
    )
};

export default Panel;