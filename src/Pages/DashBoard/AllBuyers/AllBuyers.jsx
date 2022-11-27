import React from 'react';
import AllBuyersTable from '../DashboardComponents/AllBuyersTable/AllBuyersTable';

const AllBuyers = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-4xl font-semibold text-center my-3 text-indigo-600'>All Buyers</h2>
            <AllBuyersTable />
        </div>
    );
};

export default AllBuyers;