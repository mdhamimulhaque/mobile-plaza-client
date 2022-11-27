
import React from 'react';
import { HiOutlineClock, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineUserCircle } from "react-icons/hi";


const ProductCard = ({ product, handleModalOpen }) => {



    const { condition, description, location, imgURL, userName, Category, name, originalPrice, resellPrice, yearOfUse, postedDate, postedTime } = product;


    return (
        <div className="lg:flex shadow-lg px-3">
            <img
                className="object-cover w-1/2 h-56 rounded-lg lg:w-64"
                src={imgURL}
                alt="img" />

            <div className="flex flex-col justify-between py-6 lg:mx-6 w-full">
                <span className="w-20 inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-indigo-100 text-xs text-indigo-600 font-medium">{Category}</span>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <div className="price_box flex gap-3">
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Original Price</small>
                        <span className='font-semibold text-xl text-red-600 line-through'>${originalPrice}</span>
                    </div>
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Resell Price</small>
                        <span className='font-semibold text-xl text-indigo-600'>${resellPrice}</span>
                    </div>
                </div>

                <div className='text-sm leading-[25px]'>
                    <h4 className='flex items-center gap-2'><HiOutlineUserCircle /> <strong>{userName ? userName : 'no name'}</strong></h4>
                    <h4 className='flex items-center gap-2'><span><HiOutlineLocationMarker /></span> {location}</h4>
                    <div>{description}</div>
                    <h4><strong>Year of Used:</strong> {yearOfUse}+</h4>
                    <h4><strong>Condition:</strong> {condition}</h4>
                </div>



                <span className="mt-3 text-gray-500 flex justify-between">
                    <div className='flex items-center'>
                        <HiOutlineClock className='mr-2' /> {postedTime}
                    </div>
                    <span className='flex items-center'>
                        <HiOutlineCalendar className='mr-2' /> {postedDate}
                    </span>
                </span>
                <button type="button"
                    onClick={() => handleModalOpen(product)}
                    className="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Booked Now
                </button>
            </div>

        </div>
    );
};

export default ProductCard;