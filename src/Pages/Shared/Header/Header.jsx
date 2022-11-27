import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import LOGO from '../../../img/logo.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);


    const handleResponsiveNav = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        {
            id: 1,
            name: "Home",
            path: '/'
        },
        {
            id: 2,
            name: "Categories",
            path: '/categories'
        },
        {
            id: 3,
            name: "Blog",
            path: '/blog'
        }
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
        <nav className="px-6 py-2 bg-white shadow-md md:flex ">
            <div className="flex justify-between items-center w-full md:w-3/6">
                <div className="text-2xl text-gray-800 font-bold hover:text-gray-800">
                    <Link to="/" className='flex items-center'>
                        <img className='w-12 mr-2' src={LOGO} alt="logo" />
                        <h2> Mobile <span className='text-indigo-600'>Plaza</span></h2>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={handleResponsiveNav} type="button" className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={isOpen ? `w-full pb-2 md:flex md:items-center md:justify-between md:pb-0 hidden` : `block`}>
                <div className="flex flex-col px-2 md:flex-row">
                    {
                        navItems.map(item =>
                            <Link key={item.id}
                                to={item.path}
                                className="py-2 px-2 font-semibold text-gray-800 rounded hover:text-indigo-700 md:mx-2">
                                {item.name}
                            </Link>
                        )
                    }
                    {user?.uid &&
                        <Link to="/dashboard"
                            className="py-2 px-2 font-semibold text-gray-800 rounded hover:text-indigo-700 md:mx-2"
                        >
                            Dashboard
                        </Link>
                    }

                </div>
                {
                    user?.uid ?
                        <Link to="/" onClick={handleLogOut}>
                            <button type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Log out
                            </button>
                        </Link> :
                        <div className=" flex item-center gap-2">
                            <Link to="/log-in">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    LogIn
                                </button>
                            </Link>
                            <Link to="/registration">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Registration
                                </button>
                            </Link>
                        </div>
                }

            </div>
        </nav>
    );
};

export default Header;