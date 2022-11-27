import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import LOGO from "../../../img/logo.png"
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';


const Sidebar = ({ setIsOpen, isOpen }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    const sidebarNavItems = [
        {
            name: 'DashBoard',
            path: '/dashboard'
        },

    ]

    const adminNavItem = [
        {
            name: 'All Sellers',
            path: '/dashboard/all-sellers'
        },
        {
            name: 'All Buyers',
            path: '/dashboard/all-buyers'
        },
        {
            name: 'All Users',
            path: '/dashboard/all-users'
        },
    ]

    const sellerNavItem = [
        {
            name: 'My Products',
            path: '/dashboard/my-products'
        },
        {
            name: 'Add Product',
            path: '/dashboard/add-product'
        },
        {
            name: 'My Buyers',
            path: '/dashboard/my-buyers'
        },

    ]
    return (
        <div className="flex flex-col fixed w-64 h-screen px-4 py-8 bg-white border-r">
            <div className='flex justify-between items-center'>
                <div className="text-xl font-semibold text-gray-800 flex items-center gap-1">
                    <img className='w-12' src={LOGO} alt="logo" />
                    <span>Mobile Plaza</span>
                </div>
                <HiOutlineXMark className='text-2xl' onClick={() => setIsOpen(!isOpen)} />
            </div>

            {/* <hr className="my-6 border-gray-200 dark:border-gray-600" /> */}
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        sidebarNavItems.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )
                    }

                    {/*--- seller ---*/}
                    {
                        isSeller &&
                        sellerNavItem.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )

                    }


                    {/*--- admin ---*/}
                    {
                        isAdmin &&
                        adminNavItem.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )

                    }
                </nav>

                <div>
                    <div className="flex items-center px-4 -mx-2 mb-2">
                        <img className="object-cover mx-2 rounded-full h-9 w-9" src={user?.img} alt="avatar" />
                        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
                    </div>
                    <Link to="/">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Back To Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;