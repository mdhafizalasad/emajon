import React from 'react';
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = ({cart, handleClearCart}) => {
    
    
     let quantity = 0;
     let total = 0;
     let shipping = 0;
      for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
      }

      const tax = parseFloat((total * 0.1).toFixed(2));
      const grandTotal = total + shipping + tax;

    return (
        <>
        <h5 className="text-center my-5 text-2xl text-black">Order Summary</h5>
        <div className="ps-6 my-8">
        <p className="pb-4 text-base-100 ">Selected Items: {cart.length}</p>
        <p className="pb-4 text-base-100 ">Total Price: ${total}</p>
        <p className="pb-4 text-base-100 ">Total Shipping Charge: ${shipping}</p>
        <p className="pb-4 text-base-100 ">Tax: ${tax}</p>
        <h6 className="font-semibold text-base-100 ">Grand Total: ${grandTotal}</h6>
        </div>
        <div className="p-4">
            <button onClick={handleClearCart} className="bg-secondary block w-full rounded-md text-white p-[13px]">Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
            <button className="bg-accent mt-4 block w-full rounded-md text-white p-[13px]">Order Review <FontAwesomeIcon icon={faArrowRight} /> </button>
        </div> 
        </>
    );
};

export default Cart;