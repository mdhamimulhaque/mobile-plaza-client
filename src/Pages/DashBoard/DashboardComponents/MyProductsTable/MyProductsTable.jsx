
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../context/AuthProvider'
import Loading from '../../../Shared/components/Loading/Loading';


const MyProductsTable = () => {
    const { user } = useContext(AuthContext);

    const { data: bookData = [user?.email], isLoading, refetch } = useQuery({
        queryKey: ['my-products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        return <Loading />
    }


    // ---> handle Delete products
    const handleDeleteProduct = (id) => {


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
                fetch(`http://localhost:5000/my-products/${id}`, {
                    method: 'DELETE'
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

    return (
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto px-6">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

                <thead className="min-w-full bg-gray-100  text-gray-700 text-center">
                    <tr>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Category</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Product Name</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Price</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Make Advertise</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Location</th>
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {bookData?.map((booking, index) => (
                        <tr key={booking?._id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.Category}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.name}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.originalPrice}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.userEmail}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium text-center">
                                <span className="cursor-pointer inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-green-100 text-xs text-indigo-800 font-medium">
                                    available</span>
                            </td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">
                                {booking?.location}
                            </td>
                            <td className="py-3 px-4 flex justify-center items-center space-x-6 text-base text-gray-700 font-medium">
                                <button onClick={() => handleDeleteProduct(booking?._id)} type="button" className="text-sm text-red-500 font-semibold hover:text-red-600">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default MyProductsTable
