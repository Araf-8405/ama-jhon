import React from 'react';
import './cart.css'
const Cart = (props) => {
const cart=props.cart;

    return (
        <div className="cartpro"> 
            <h3>Order summery</h3>
            <h5>Items ordered:{cart.length}</h5>

        </div>
    );
};

export default Cart;