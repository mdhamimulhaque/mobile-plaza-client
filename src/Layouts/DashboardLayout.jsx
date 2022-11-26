import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/DashBoard/Sidebar/Sidebar';
import { HiOutlineListBullet } from "react-icons/hi2";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='p-6 bg-indigo-600 text-white'>
                <HiOutlineListBullet className={!isOpen ? 'text-2xl block' : "hidden"} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className={isOpen ? 'block absolute left-0 top-0' : "hidden"}>
                <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            <div className="out-late_box">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;