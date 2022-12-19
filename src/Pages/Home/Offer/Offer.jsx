import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <div className="p-6 py-12 bg-indigo-600 text-white mb-12 mx-6">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                        <br className="sm:hidden" /> 50% Off
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Get Your offers Today</span>
                    </div>
                    <Link to="/categories" rel="noreferrer noopener" className="py-2 px-4  bg-white hover:bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-600  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;