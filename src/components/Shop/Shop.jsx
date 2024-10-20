import React, { useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const Shop = () => {
  const [cart, setCart]= useState([])

  const handleAddToCart =(selectedProduct)=>{
    let newCart = [];
     const exist = cart.find((product) => product.id === selectedProduct.id);
     if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart,selectedProduct];
      }
      else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);//4
        exist.quantity = exist.quantity + 1;
        newCart = [...rest, exist];
      } 
     setCart(newCart);
  };
  
  // cart clear function
  const handleClearCart=()=>{
        setCart("")
  }

  return (
    <div className="flex mt-20">
      <div className="bg-white w-4/5">
     <Products handleAddToCart ={handleAddToCart}></Products>
      </div>
      <div className="min-h-screen fixed right-0 w-1/4 bg-primary">
        <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
