import React, { useState } from 'react';
import fakeData from '../../fakeData';
import  './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
   
  const frst10 =fakeData.slice(0,10);
 const[product,setproduct]= useState(frst10);
const [cart,setCart]=useState([]);


 const handleAddProduct =(props)=>{
     const newcart= [...cart,props];
     setCart(newcart);
 }
      return (
        <div className="shop-container">
        <div className="product">
        
               {
                
                   product.map(products=> <Product
            
                    handleAddProduct ={handleAddProduct}
                     product={products}></Product>)
               }
          
           </div>
           <div className="cart">
               <Cart cart={cart}></Cart>
               

           </div>


        </div>
    );
};

export default Shop;