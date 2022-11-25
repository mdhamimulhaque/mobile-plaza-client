import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/DashBoard/Sidebar/Sidebar';
import { HiOutlineListBullet } from "react-icons/hi2";

const DashboardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <HiOutlineListBullet className='text-2xl m-6' onClick={() => setIsOpen(!isOpen)} />
            <div className={isOpen ? 'block fixed left-0 top-0' : "hidden"}>
                <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            <div className="out-late_box px-6">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;