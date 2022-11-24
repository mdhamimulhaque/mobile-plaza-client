import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const SingleCategory = () => {
    const products = useLoaderData();
    return (
        <section className='xl::h-screen'>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-indigo-600 capitalize lg:text-4xl">All Products</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {
                        products.map(product =>
                            <ProductCard key={product._id} product={product} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default SingleCategory;