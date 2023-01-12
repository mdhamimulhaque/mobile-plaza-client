
import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineClock, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineUserCircle } from "react-icons/hi";
import { HiCheckBadge, HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';



const ProductCard = ({ product, handleModalOpen }) => {
    const { _id, condition, description, location, imgURL, userEmail, userName, Category, name, originalPrice, resellPrice, yearOfUse, postedDate, postedTime } = product;
    const [verifyUser, setVerifyUser] = useState('');
    const [wishList, setWishList] = useState(false);
    const { user } = useContext(AuthContext)


    // --->verify user badge
    useEffect(() => {
        fetch(`https://mobile-plaza-server.vercel.app/seller-role?email=${userEmail}`)
            .then(res => res.json())
            .then(data => setVerifyUser(data[0]?.isVerifiedUser))
            .catch(err => console.log(err))
    }, [userEmail])

    // ---> handle wish list
    const handleWishList = (id) => {
        setWishList(true)
        const wishlistData = {
            productName: name,
            userEmail: user?.email,
            price: originalPrice,
            Category: Category,
            imgURL: imgURL,
            location: location
        }

        // --->store wishlist data
        fetch(`https://mobile-plaza-server.vercel.app/wish-list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wishlistData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success('product added to wishlist')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    return (
        <div className="lg:flex shadow-lg px-3">
            <img
                className="object-cover w-1/2 h-56 rounded-lg lg:w-64"
                src={imgURL}
                alt="img" />

            <div className="flex flex-col justify-between py-6 lg:mx-6 w-full">
                <div className='flex justify-between items-center'>
                    <span className="w-20 inline-flex justify-center items-center py-0.5 px-2.5 border-none rounded-full bg-indigo-100 text-xs text-indigo-600 font-medium">{Category}</span>
                    {
                        wishList ?
                            <HiHeart className='text-red-600 text-2xl' /> :
                            <HiOutlineHeart onClick={() => handleWishList(_id)} className='cursor-pointer text-2xl' />
                    }
                </div>

                <h2 className='text-xl font-semibold'>{name}</h2>
                <div className="price_box flex gap-3">
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Original Price</small>
                        <span className='font-semibold text-xl text-red-600 line-through'>${originalPrice}</span>
                    </div>
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Resell Price</small>
                        <span className='font-semibold text-xl text-indigo-600'>${resellPrice}</span>
                    </div>
                </div>

                <div className='text-sm leading-[25px]'>
                    <h4 className='flex items-center gap-2'><HiOutlineUserCircle />
                        <strong>{userName ? userName : 'no name'}</strong>
                        {
                            verifyUser && <HiCheckBadge className='text-indigo-600' />
                        }
                    </h4>
                    <h4 className='flex items-center gap-2'><span><HiOutlineLocationMarker /></span> {location}</h4>
                    <div>{description}</div>
                    <h4><strong>Year of Used:</strong> {yearOfUse}+</h4>
                    <h4><strong>Condition:</strong> {condition}</h4>
                </div>



                <span className="mt-3 text-gray-500 flex justify-between">
                    <div className='flex items-center'>
                        <HiOutlineClock className='mr-2' /> {postedTime}
                    </div>
                    <span className='flex items-center'>
                        <HiOutlineCalendar className='mr-2' /> {postedDate}
                    </span>
                </span>
                <button type="button"
                    onClick={() => handleModalOpen(product)}
                    className="py-2 px-4 mt-3 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Booked Now
                </button>
            </div>

        </div>
    );
};

export default ProductCard;