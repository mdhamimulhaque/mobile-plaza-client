
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Swal from 'sweetalert2';
import Loading from '../../../Shared/components/Loading/Loading';


const AllBuyersTable = () => {

    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['all-buyers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/all-buyers`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }


    // ---> handle delete seller
    const handleDeleteBuyer = (email) => {

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




    return (
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
                <thead className="min-w-full bg-gray-800 text-left text-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">No</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Phone</th>
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>


                <tbody className="">
                    {allBuyers?.map((buyer, index) => (
                        <tr key={allBuyers._id} className={`${index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"} whitespace-nowrap`}>
                            <td className="py-3 px-4 text-base text-gray-200 font-semibold">{index + 1}</td>
                            <td className="py-3 px-4 text-base text-gray-200 font-semibold">{buyer?.name}</td>
                            <td className="py-3 px-4 text-base text-gray-400 font-medium">{buyer?.email}</td>
                            <td className="py-3 px-4 text-base text-gray-400 font-medium">{buyer?.phone}</td>
                            <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                                <button
                                    onClick={() => handleDeleteBuyer(buyer?.email)}
                                    type="button"
                                    className="text-sm text-red-400 font-semibold hover:text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default AllBuyersTable
