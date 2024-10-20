import React from "react";

const Product = ({product, handleAddToCart }) => {
    const {name,price,seller,ratings,img} = product;
    const fallbackImg = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"; 
  
 
  
  
    return (
    <div className="border-2 h-[500px] rounded-md relative">
      <div className="p-2 card-compact  mb-4">
        <figure>
          <img className="w-[286px] h-[286px] rounded-md"
            src={img}
            alt={name} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = fallbackImg;
            }}
            />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-black">{name.length > 20 ? name.slice(0,15) + '...' : name}</h2>
          <p className="text-base-100">Price: {price}</p>
          <p className="text-base-100">Manufacturer: {seller}</p>
          <p className="text-base-100">Rating: {ratings}</p>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 ">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary w-full rounded-b-md rounded-none">Add to Cart</button>
          </div>
    </div>
  );
};

export default Product;
