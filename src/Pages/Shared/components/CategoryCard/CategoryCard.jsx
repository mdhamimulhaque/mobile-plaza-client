import React from 'react';
import { HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CategoryCard = ({ phnCategory }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm">
            <div className="w-full h-80 bg-gray-300 bg-center bg-cover rounded-lg shadow-md ">
                <img className='w-full h-80 object-cover' src={phnCategory?.img} alt="img" />
            </div>

            <Link to={`/category/${phnCategory?.name}`}>
                <button type='button' className="w-56 -mt-5 overflow-hidden bg-indigo-600 hover:bg-indigo-700 cursor-pointer flex items-center text-white justify-center gap-3 rounded-lg shadow-lg md:w-64">
                    <h3 className="py-2 font-bold tracking-wide text-center uppercase">{phnCategory?.name}</h3>
                    <HiChevronDoubleRight className='text-white text-lg' />
                </button>
            </Link>
        </div>
    );
};

export default CategoryCard;