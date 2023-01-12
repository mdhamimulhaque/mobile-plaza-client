import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WishListTableTr = ({ WList, refetch }) => {
    // ---> handle remove wishlist
    const handleRemoveWishlist = (id) => {
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
                fetch(`https://mobile-plaza-server.vercel.app/wish-list/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // ---> toast delete msg
                            Swal.fire(
                                'Deleted!',
                                'Wish Product remove successfully',
                                'success'
                            )
                            refetch()
                        }
                    })
                    .catch(err => console.log(err))
            }
        })
    }

    return (
        <tr className="bg-gray-100 border-b-2 border-gray-200 ">
            <td className="px-16 py-2 flex flex-row items-center">
                <img
                    className="h-8 w-8 rounded-full object-cover "
                    src={WList?.imgURL}
                    alt="img"
                />
            </td>
            <td>
                <span className="text-center ml-2 font-semibold">{WList?.productName}</span>
            </td>

            <td className="px-16 py-2">
                <span>{WList?.Category}</span>
            </td>
            <td className="px-16 py-2">
                <span>{WList?.price}</span>
            </td>
            <td className="px-16 py-2">
                <span>{WList?.location}</span>
            </td>
            <td className="px-16 py-2 flex gap-2">
                <Link to="/dashboard/checkout" >
                    <button type="button" className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Buy
                    </button>
                </Link>

                <button type="button"
                    onClick={() => handleRemoveWishlist(WList._id)}
                    className="py-2 px-4 mt-2 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Remove
                </button>
            </td>

        </tr>
    );
};

export default WishListTableTr;