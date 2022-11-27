import React from 'react';
import MyProductsTable from '../DashboardComponents/MyProductsTable/MyProductsTable';

const MyProducts = () => {
    return (
        <div className='bg-indigo-50 h-screen'>
            <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-3 text-indigo-600 py-4'>My Products</h2>
            <MyProductsTable />
        </div>
    );
};

export default MyProducts;