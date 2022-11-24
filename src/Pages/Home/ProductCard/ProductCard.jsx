import React from 'react';
import { HiOutlineClock, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineUserCircle } from "react-icons/hi";

const ProductCard = ({ product }) => {
    const { condition, description, location, imgURL, Category, name, originalPrice, resellPrice, yearOfUse, postedDate, postedTime } = product;
    return (
        <div className="lg:flex shadow-lg px-3">
            <img
                className="object-cover w-1/2 h-56 rounded-lg lg:w-64"
                src={imgURL}
                alt="img" />

            <div className="flex flex-col justify-between py-6 lg:mx-6">
                <span className="w-20 inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-indigo-100 text-xs text-indigo-600 font-medium">{Category}</span>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <div className="price_box flex gap-3">
                    <span className='font-semibold text-xl text-red-600 line-through'>${originalPrice}</span>
                    <span className='font-semibold text-xl text-indigo-600'>${resellPrice}</span>
                </div>
                <div className='text-sm leading-[25px]'>
                    <h4 className='flex items-center gap-2'><HiOutlineUserCircle /> <strong>Name</strong></h4>
                    <h4 className='flex items-center gap-2'><span><HiOutlineLocationMarker /></span> {location}</h4>
                    <div>{description}</div>
                    <h4><strong>Year of Used:</strong> {yearOfUse}year</h4>
                    <h4><strong>Condition:</strong> {condition}</h4>
                </div>



                <span className="mt-3 text-gray-500 flex  justify-between">
                    <div className='flex items-center'>
                        <HiOutlineClock className='mr-2' /> {postedDate}
                    </div>
                    <span className='flex items-center'>
                        <HiOutlineCalendar className='mr-2' /> {postedTime}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default ProductCard;