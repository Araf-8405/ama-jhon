import React from 'react';
import logo from '../../images/logo.png';
import  './Header.css';



const Header = (props) => {
    const cart1=props.cart;
   
    return (
        <div className="header">
            <img src= {logo} alt=""/>
            <nav>
                <a href="/Shop" >Shop</a>
                <a href="/Review">Order Review </a>
                <a href="/Inventory"> Manage Inventory</a>
               
            </nav>
            <div>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="type here to search"></input>
                    <a href="/review"><span class="cart-count">{cart1}</span></a>
       
        </div>
            </div>
        </div>

       
    );
};

export default Header;