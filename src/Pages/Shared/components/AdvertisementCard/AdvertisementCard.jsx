import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisementCard = ({ advertise }) => {

    const { Category, description, imgURL, name, originalPrice, resellPrice } = advertise;
    return (
        <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">

            <div className="relative w-full overflow-hidden">
                <div className="img-box flex justify-center pt-6">
                    <img className='h-40 object-cover' src={imgURL} alt='img' />
                </div>
                <h2 className="absolute top-6 left-6 inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-red-600 cursor-pointer">Hot</h2>
            </div>
            <div className="my-6 py-3 px-8 flex flex-col justify-around ">
                <span className="inline-flex justify-center items-center py-1 px-5 border-none rounded bg-blue-100 text-sm text-indigo-800 font-medium">{Category}</span>
                <h1 className="title-font text-2xl font-bold text-gray-800 antialiased my-2">{name}</h1>
                <div className="price_box flex gap-3 mt-4">
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Original Price</small>
                        <span className='font-semibold text-xl text-red-600 line-through'>${originalPrice}</span>
                    </div>
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Resell Price</small>
                        <span className='font-semibold text-xl text-indigo-600'>${resellPrice}</span>
                    </div>
                </div>
                <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">{description.slice(0, 250)}...</p>
                <Link to='/categories' className="self-start p-2 bg-indigo-600 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105">Read more</Link>
            </div>

        </div>
    );
};

export default AdvertisementCard;