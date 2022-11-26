
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthProvider'
import Loading from '../../../Shared/components/Loading/Loading';

const MyProductsTable = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [bookData, setBookData] = useState([])

    // ---> my products
    useEffect(() => {
        fetch(`http://localhost:5000/my-products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    return <Loading />
                }
                setBookData(data)
            })
            .finally(setLoading(false))
    }, [user?.email])


    console.log(bookData)

    return (
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto px-6">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

                {/* :TABLE HEAD */}
                <thead className="min-w-full bg-gray-100 text-left text-gray-700 text-center">
                    <tr>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">User</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Product Name</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Price</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Email</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Make Advertise</th>
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>


                {/* :TABLE BODY */}
                <tbody className="text-center">
                    {bookData?.map((booking, index) => (
                        <tr key={booking?._id} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.name}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.productName}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.price}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{booking?.email}</td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium text-center">
                                <span className="cursor-pointer inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-green-100 text-xs text-green-800 font-medium">available</span>
                            </td>
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">
                                {booking?.date}
                            </td>
                            <td className="py-3 px-4 flex justify-center items-center space-x-6 text-base text-gray-700 font-medium">
                                <button type="button" className="text-sm text-red-500 font-semibold hover:text-red-600">Delete</button>
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
