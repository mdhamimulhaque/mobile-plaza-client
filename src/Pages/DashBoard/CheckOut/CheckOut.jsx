import React from 'react';
import gif from "../../../img/cartgif.gif";

const CheckOut = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img className='w-40' src={gif} alt="" />
            <h2 className='text-5xl'>checkout Your Product</h2>
        </div>
    );
};

export default CheckOut;