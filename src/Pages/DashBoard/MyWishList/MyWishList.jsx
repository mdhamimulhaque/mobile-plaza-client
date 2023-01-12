import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/components/Loading/Loading';
import WishListTableTr from '../DashboardComponents/WishListTableTr/WishListTableTr';

const MyWishList = () => {
    const { user } = useContext(AuthContext);

    const { data: wishListData = [], isLoading, refetch } = useQuery({
        queryKey: ['all-sellers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/wish-list?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    });



    if (isLoading) {
        return <Loading />
    }


    return (
        <div className="mt-2">
            <h2 className='text-3xl lg:text-4xl font-semibold text-center my-3 text-indigo-600'>My WishList</h2>
            <table className="max-w-5xl mx-auto table-auto">
                <thead className="justify-between">
                    <tr className="bg-indigo-400">
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Image</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Name</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Category</span>
                        </th>

                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Price</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Location</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-gray-100 font-semibold">Action</span>
                        </th>

                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {
                        wishListData.map(WList =>
                            <WishListTableTr
                                key={WList._id}
                                WList={WList}
                                refetch={refetch}
                            />
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyWishList;