import React from 'react';
import { Link } from 'react-router-dom';

const WishListTableTr = ({ WList }) => {

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
            <td className="px-16 py-2">
                <Link to="/dashboard/checkout" >
                    <button type="button" className="py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Buy
                    </button>
                </Link>
            </td>

        </tr>
    );
};

export default WishListTableTr;