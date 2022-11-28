import React from 'react';
import { FaFacebook, FaLinkedin, FaSkype, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LOGO from '../../../img/logo.png'

const Footer = () => {
    const navItems = [
        {
            id: 1,
            name: "Home",
            path: '/home'
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
    return (
        <footer className="relative bg-indigo-600 text-white pt-8 pb-6 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="text-2xl text-gray-800 font-bold hover:text-gray-800">
                            <Link to="/" className='flex items-center text-white'>
                                <img className='w-12 mr-2' src={LOGO} alt="logo" />
                                <h2> Mobile Plaza</h2>
                            </Link>
                        </div>
                        <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
                            <button className="bg-white text-indigo-600 hover:text-indigo-700 shadow-lg text-2xl flex justify-center items-center  h-10 w-10  rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaFacebook />
                            </button>
                            <button className="bg-white text-indigo-600 hover:text-indigo-700 shadow-lg text-2xl flex justify-center items-center  h-10 w-10  rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaLinkedin />
                            </button>
                            <button className="bg-white text-indigo-600 hover:text-indigo-700 shadow-lg text-2xl flex justify-center items-center  h-10 w-10  rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaSkype />
                            </button>
                            <button className="bg-white text-indigo-600 hover:text-indigo-700 shadow-lg text-2xl flex justify-center items-center  h-10 w-10  rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FaTwitterSquare />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    {
                                        navItems.map(item =>
                                            <Link key={item.id}
                                                to={item.path}
                                                className="text-white hover:text-gray-300 font-semibold block pb-2 text-sm">
                                                {item.name}
                                            </Link>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Categories</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/categories"
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">samsung</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories"
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">iPhone</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories"
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">xiaomi</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories"
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">realme</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center" />
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Copyright © Developed by Md Hamimul Haque
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;