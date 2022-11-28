import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersTableCard = ({ myOrder }) => {
    const { productName, imgURL, price } = myOrder;
    return (
        <>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between shadow-lg px-6 bg-indigo-100">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={imgURL} alt="Polaroid camera" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{productName}</h3>
                                <p className="text-lg font-semibold">Price: ${price}</p>
                            </div>
                        </div>
                        <div className="flex text-sm justify-end">
                            <Link to="/dashboard/checkout" >
                                <button type="button" className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default MyOrdersTableCard;