import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineXMark } from "react-icons/hi2";
import LOGO from "../../../img/logo.png"
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import placeHolderUser from '../../../img/placeholderUser.png';
import { toast } from 'react-toastify';
import useBuyer from '../../../hooks/useBuyer';
import { HiOutlineHome, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUsers, HiOutlineUserGroup, HiOutlineShoppingCart, HiOutlineFolderPlus } from "react-icons/hi2";


const Sidebar = ({ setIsOpen, isOpen }) => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    const sidebarNavItems = [
        {
            name: 'DashBoard',
            path: '/dashboard',
            icon: <HiOutlineHome />
        },

    ]
    const buyerNavItems = [

        {
            name: 'My Orders',
            path: '/dashboard/my-orders',
            icon: <HiOutlineShoppingCart />
        },
        {
            name: 'My Wish List',
            path: '/dashboard/my-wishlist',
            icon: <HiOutlineHeart />
        },

    ]

    // --->admin

    const adminNavItem = [
        {
            name: 'All Sellers',
            path: '/dashboard/all-sellers',
            icon: <HiOutlineUsers />
        },
        {
            name: 'All Buyers',
            path: '/dashboard/all-buyers',
            icon: <HiOutlineUserGroup />
        },

    ]
    // --->seller
    const sellerNavItem = [
        {
            name: 'My Products',
            path: '/dashboard/my-products',
            icon: <HiOutlineShoppingBag />
        },
        {
            name: 'Add Product',
            path: '/dashboard/add-product',
            icon: <HiOutlineFolderPlus />
        },


    ]

    // ---> handle logout
    const handleLogOut = () => {
        logOut()
            .then(result => {
                localStorage.removeItem('accessToken')
                toast.success('logOut successfully');
            })
    }


    return (
        <div className="flex flex-col fixed w-64 h-screen px-4 py-8 bg-white border-r">
            <div className='flex justify-between items-center'>
                <div className="text-xl font-semibold text-gray-800 flex items-center gap-1">
                    <img className='w-12' src={LOGO} alt="logo" />
                    <span><Link to='/'>Mobile Plaza</Link></span>
                </div>
                <HiOutlineXMark className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    {
                        sidebarNavItems.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                {items.icon}

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )
                    }
                    {/*--- buyers--- */}
                    {isBuyer &&
                        buyerNavItems.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                {items.icon}

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )
                    }

                    {/*--- seller ---*/}
                    {
                        isSeller &&
                        sellerNavItem.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                {items.icon}

                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )

                    }


                    {/*--- admin ---*/}
                    {
                        isAdmin &&
                        adminNavItem.map(items =>
                            <Link key={items.name} to={items.path} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-200 hover:text-gray-700" >
                                {items.icon}
                                <span className="mx-4 font-medium">{items.name}</span>

                            </Link>

                        )

                    }
                </nav>

                <div>
                    <div className="flex items-center px-4 -mx-2 mb-2">
                        <img className="object-cover mx-2 rounded-full h-9 w-9"
                            src={user?.img ? user?.img : placeHolderUser}
                            alt="avatar" />
                        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
                    </div>
                    <Link to="/">
                        <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Back To Home
                        </button>
                    </Link>
                    <Link to="/" onClick={handleLogOut} >
                        <button type="button" className="py-2 px-4 mt-2 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Log Out
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;