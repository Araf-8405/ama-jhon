import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {img,name,seller,price,stock}=props.product;
    return (
        
        <div className="item">
            <div>

            <img src={img} alt=""/>
            </div>

            <div className="details">
            <h4 className="name"> {name}</h4>
            <p><small> by: {seller}</small></p>
            <br/>
            <p>$ {price} </p>
            <p><small>Only {stock} left in stock - order soon</small></p>
            <button className="btn"
            onClick= {()=>props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart}/>add to cart</button>
        </div>
        </div>
    );
};

export default Product;