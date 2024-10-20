import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({handleAddToCart}) => {

    const [products , setProducts ]= useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);

    return (
        <div className='pt-24 px-20'>
                <div className="grid md:grid-cols-3 gap-4">
                {
                products.map((product) => (
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product> 
            ))}  
                </div>     
        </div>
    );
};

export default Products;