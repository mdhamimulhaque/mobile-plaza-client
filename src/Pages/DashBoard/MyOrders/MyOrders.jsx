import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/components/Loading/Loading';
import MyOrdersTableCard from '../DashboardComponents/MyOrdersTableCart/MyOrdersTableCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });


    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="flex flex-col justify-center max-w-3xl p-6 space-y-4 sm:p-10 mx-auto">
            <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-3 text-indigo-600 py-4'>My Orders</h2>
            <ul className="flex flex-col justify-center divide-y divide-gray-700">
                {
                    myOrders?.map(myOrder => <MyOrdersTableCard
                        key={myOrder._id}
                        myOrder={myOrder}
                    />)
                }

            </ul>
        </div>
    );
};

export default MyOrders;