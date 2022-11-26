import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import LOGO from "../../../img/logo.png"


const Sidebar = ({ setIsOpen, isOpen }) => {
    const sidebarNavItems = [
        {
            name: 'My Orders',
            path: '/dashboard'
        },
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
        {
            name: 'All Sellers',
            path: '/dashboard/all-sellers'
        },
        {
            name: 'All Buyers',
            path: '/dashboard/all-buyers'
        },


    ]
    return (
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
            <div className='flex justify-between items-center'>
                <div class="text-xl font-semibold text-gray-800 flex items-center gap-1">
                    <img className='w-12' src={LOGO} alt="logo" />
                    <span>Mobile Plaza</span>
                </div>
                <HiOutlineXMark className='text-2xl' onClick={() => setIsOpen(!isOpen)} />
            </div>

            {/* <hr class="my-6 border-gray-200 dark:border-gray-600" /> */}
            <div class="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        sidebarNavItems.map(items =>
                            <Link key={items.name} to={items.path} class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" href="#">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span class="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )
                    }
                </nav>

                <div class="flex items-center px-4 -mx-2">
                    <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;