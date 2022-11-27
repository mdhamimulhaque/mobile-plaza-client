import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import UserPlaceholderImg from "../../../img/placeholderUser.png";
import Loading from '../../Shared/components/Loading/Loading';

const AllSellers = () => {
    const { data: allSellers = [], isLoading } = useQuery({
        queryKey: ['all-sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all-sellers`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }
    console.log(allSellers)

    return (
        <>
            <h2 className='text-3xl lg:text-4xl font-semibold text-center my-3 text-indigo-600'>All sellers</h2>
            <p className='text-center'>Total: {allSellers.length}</p>
            <div className='flex flex-wrap justify-center mt-6 gap-6 container mx-auto'>
                {
                    allSellers.map(seller =>
                        <div key={seller._id} className="flex items-start px-4 py-6 shadow-lg">
                            <img className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                                src={seller?.img ? seller?.img : UserPlaceholderImg}
                                alt="avatar" />
                            <div className="">
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">{seller?.name}</h2>
                                    <HiOutlineTrash className='text-red-600 hover:text-red-700 text-lg cursor-pointer' />
                                </div>
                                <p className="text-gray-700 pr-6"><strong>Email: </strong>{seller?.email}</p>
                                <p className="text-gray-700"><strong>Phone:</strong> {seller?.phone}</p>
                                <button type="button" className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    make valid Seller
                                </button>
                            </div>
                        </div>
                    )
                }

            </div>
        </>

    );
};

export default AllSellers;