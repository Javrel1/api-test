import React from "react";
import style from './style.module.css';
import {IProduct} from "../model";

interface ProductProps {
    product: IProduct
}


export function Main({product}: ProductProps){
    return(
        <div className={style.container}>
            <img className={style.image} src={product.image}/>
            <p>{product.title}</p>
        </div>

    )
}