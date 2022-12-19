import React from 'react';
import { HiOutlineChatBubbleLeft, HiOutlineDevicePhoneMobile, HiOutlineTruck, HiOutlineCheckBadge } from "react-icons/hi2";

const Support = () => {
    const supportInfo = [
        {
            id: 1,
            title: '24H. SUPPORT',
            details: 'We try to satisfy to our client. We provide best support from our hand.',
            icon: <HiOutlineChatBubbleLeft />
        },
        {
            id: 2,
            title: 'UPDATE',
            details: 'We try to satisfy to our client. We provide best support from our hand.',
            icon: <HiOutlineTruck />
        },
        {
            id: 3,
            title: 'WARRANTY',
            details: 'We try to satisfy to our client. We provide best support from our hand.',
            icon: <HiOutlineCheckBadge />
        }
    ]
    return (
        <section className='px-6 my-10'>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 mb-5'>Why we are best</h2>
            <div className="support_wrapper className=' lg:grid grid-cols-3 gap-3">
                {
                    supportInfo.map(info =>
                        <div key={info.id} className="support_box_area bg-indigo-50 px-5 py-8 mb-10 hover:shadow-md hover:bg-indigo-100">
                            <div className="icon_box text-7xl  text-indigo-600">
                                {info.icon}
                            </div>
                            <div className="text_box">
                                <h2 className='font-bold my-2 text-indigo-600'>{info.title}</h2>
                                <p>{info.details}</p>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Support;