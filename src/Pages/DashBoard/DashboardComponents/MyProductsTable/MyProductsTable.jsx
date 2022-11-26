
import React from 'react'

const MyProductsTable = () => {

    const data = [
        {
            name: "iphone",
            job: "Training manager",
            email: 20000,
            created: "30/10/2021"
        },


    ]

    return (
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto px-6">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

                {/* :TABLE HEAD */}
                <thead className="min-w-full bg-gray-100 text-left text-gray-700 text-center">
                    <tr>
                        {/* ::Name */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Brand</th>
                        {/* ::Job Title */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Name</th>
                        {/* ::Created Date */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Price</th>
                        {/* ::Email */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Make Advertise</th>
                        {/* ::Email */}
                        <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>

                        {/* ::Actions */}
                        <th className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide" scope="col">Actions</th>
                    </tr>
                </thead>


                {/* :TABLE BODY */}
                <tbody className="text-center">
                    {data.map((user, index) => (
                        <tr key={user.name} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"} whitespace-nowrap`}>
                            {/* ::User Name */}
                            <td className="py-3 px-4 text-base text-gray-700 font-semibold">{user.name}</td>
                            {/* ::User Job Title */}
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.job}</td>
                            {/* ::User Email */}
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">{user.email}</td>
                            {/* ::User Created Date */}
                            <td className="py-3 px-4 text-base text-gray-500 font-medium text-center">
                                <span className="cursor-pointer inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-green-100 text-xs text-green-800 font-medium">available</span>
                            </td>
                            {/* ::User Created Date */}
                            <td className="py-3 px-4 text-base text-gray-500 font-medium">
                                {user.created}
                            </td>
                            {/* ::Action Buttons */}
                            <td className="py-3 px-4 flex justify-center items-center space-x-6 text-base text-gray-700 font-medium">
                                {/* :::delete button */}
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
