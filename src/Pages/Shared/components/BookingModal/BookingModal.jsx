import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthProvider';

const BookingModal = ({ isModalOpen, handleCloseModal, modalData, setIsOpenModal }) => {

    const { name, resellPrice, imgURL } = modalData;
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();



    // ---> date
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let date = `${day}-${month}-${year}`;

    // ---> handleBooking
    const handleBooked = data => {
        const bookingInfo = {
            name: user?.displayName,
            email: user?.email,
            phone: data.phone,
            location: data.location,
            productName: name,
            price: resellPrice,
            imgURL: imgURL,
            date
        }

        axios
            .post('https://mobile-plaza-server.vercel.app/booking', {
                body: bookingInfo
            })
            .then((res) => {
                if (res.status === 200) {
                    toast.success('Booking completed!!');
                }
            });


    };
    return (
        <div className="relative flex justify-center items-center z-50">

            <div id="menu" className={isModalOpen ? 'w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0' : 'hidden'}>
                <div className="2xl:container  2xl:mx-auto py-10 px-4 md:px-28 flex justify-center items-center">
                    <div className="w-96 md:w-auto  relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
                        <div className="doctor_info_box flex flex-col justify-center">
                            <h2 className='text-2xl lg:text-3xl font-semibold text-indigo-600 px-2'>{name}</h2>
                            <div className='flex justify-center my-2'>
                                <span className='font-semibold text-3xl text-red-600'>Price: ${resellPrice}</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(handleBooked)} className='w-[320px] px-2'>

                            <div className="mb-5">
                                <input
                                    type="text"
                                    value={user?.displayName}
                                    disabled
                                    name="fullName"
                                    placeholder='Full Name'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    name="email"
                                    value={user?.email}
                                    disabled
                                    placeholder='Email'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="number"
                                    name="phone"
                                    {...register('phone')}
                                    placeholder='Phone Number'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    name="location"
                                    {...register('location')}
                                    placeholder='Meeting Location'
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
                                />
                            </div>

                            <div>
                                <button onClick={() => setIsOpenModal(!isModalOpen)}
                                    className='mt-4 mb-2 inline-flex items-center justify-center rounded-md p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white w-full'>Booked !!</button>
                            </div>
                        </form>

                        <button
                            onClick={handleCloseModal}
                            type='submit'
                            className="text-gray-800 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
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