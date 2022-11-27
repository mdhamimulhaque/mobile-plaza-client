import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiOutlineTrash, HiCheckBadge } from "react-icons/hi2";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import UserPlaceholderImg from "../../../img/placeholderUser.png";
import Loading from '../../Shared/components/Loading/Loading';

const AllSellers = () => {
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['all-sellers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/all-sellers`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }

    // ---> handle delete seller
    const handleDeleteSeller = (email) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4F46E5',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // --->method
                fetch(`https://mobile-plaza-server.vercel.app/all-sellers/${email}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete msg
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
                    .catch(err => console.log(err))
            }
        })

    }

    // ---> handle verified user
    const handleVerifiedSeller = (email) => {
        fetch(`https://mobile-plaza-server.vercel.app/all-sellers/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('user verified has been completed');
                    refetch()
                }
            })
    }

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
                                    <h2 className="text-lg font-semibold text-gray-900 -mt-1 flex items-center gap-2">
                                        {seller?.name}
                                        {seller?.isVerifiedUser && <HiCheckBadge className='text-indigo-600' />}
                                    </h2>
                                    <HiOutlineTrash
                                        onClick={() => handleDeleteSeller(seller?.email)}
                                        className='text-red-600 hover:text-red-700 text-lg cursor-pointer' />
                                </div>
                                <p className="text-gray-700 pr-6"><strong>Email: </strong>{seller?.email}</p>
                                <p className="text-gray-700"><strong>Phone:</strong> {seller?.phone}</p>
                                <button
                                    onClick={() => handleVerifiedSeller(seller?.email)}
                                    type="button"
                                    className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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