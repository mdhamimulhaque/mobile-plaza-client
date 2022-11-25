import React from 'react';

const BookingModal = ({ isModalOpen, handleCloseModal, modalData }) => {
    console.log(modalData)

    return (
        <div className="relative flex justify-center items-center z-50">

            <div id="menu" className={isModalOpen ? 'w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0' : 'hidden'}>
                <div className="2xl:container  2xl:mx-auto py-10 px-4 md:px-28 flex justify-center items-center">
                    <div className="w-96 md:w-auto  relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                        <div className="doctor_info_box text-center">
                            <h2 className='text-2xl lg:text-3xl font-semibold mb-4 text-emerald-400 px-2'>Title</h2>

                        </div>

                        <form className='w-[320px] px-2'>

                            <div className="mb-5">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder='Full Name'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#34D399] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder='Phone Number'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>
                            <div>
                                <button className='mt-4 mb-2 inline-flex items-center justify-center rounded-md p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white w-full'>Booked !!</button>
                            </div>
                        </form>

                        <button
                            onClick={handleCloseModal}
                            type='submit'
                            className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;