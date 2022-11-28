import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';
import useToken from '../../../hooks/useToken';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [productError, setProductError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const imgHostKey = process.env.REACT_APP_imgbb_key;


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;



        // --->time
        const today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // ---> date
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        let date = `${day}-${month}-${year}`;


        // ---> get imgbb img url
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success === true) {
                    const productInfo = {
                        Category: data.Category,
                        name: data.name,
                        imgURL: imgData.data.url,
                        originalPrice: data.originalPrice,
                        resellPrice: data.resellPrice,
                        yearOfUse: data.yearOfUse,
                        postedDate: date,
                        postedTime: time,
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        userEmail: user?.email,
                        userName: user?.displayName,
                    }

                    // ---> data store to server (axios)
                    axios
                        .post(`https://mobile-plaza-server.vercel.app/add-product?email=${user?.email}`, {
                            body: productInfo
                        })
                        .then((res) => {
                            if (res.status === 200) {
                                setUserEmail(data.email);
                                setProductError('');
                                toast.success('Product Added successfully!!');
                                navigate('/dashboard/my-products')
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            setProductError(err.message)
                        })
                }
            })
            .catch(err => {
                console.log(err);
                setProductError(err.message)
            })
    }

    return (
        <div className="flex p-1 py-12 bg-indigo-50 place-content-center">
            <div className="max-w-lg overflow-hidden border bg-white border-gray-200 rounded-lg">
                <form onSubmit={handleSubmit(handleAddProduct)} className="w-full max-w-lg">
                    <div className="p-10 pb-6">
                        <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-3 text-indigo-600'>Add Product</h2>

                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="productName">
                                    Product Name
                                </label>
                                <input
                                    {...register('name')}
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="productName" type="text" placeholder="Product Name" required />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="location">
                                    Location
                                </label>
                                <input
                                    {...register('location')}
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="productName" type="text" placeholder="location" required />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="yearOfUse">
                                    Year of purchase
                                </label>
                                <input
                                    {...register('yearOfUse')}
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="productName" type="number" placeholder="Year Of Purchase" required />
                            </div>

                            <div className="w-full px-3 mb-6 md:w-1/2 ">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="ordinalPrice" required>
                                    Ordinal Price
                                </label>
                                <input
                                    {...register('originalPrice')}
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                                    id="ordinalPrice" type="number" placeholder="Ordinal Price" required />
                            </div>

                            <div className="w-full px-3 mb-6 md:w-1/2 ">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="resellPrice">
                                    Resell Price
                                </label>
                                <input
                                    {...register('resellPrice')}
                                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                                    id="resellPrice" type="number" placeholder="Resell Price" required />
                            </div>


                            <div className="w-full px-3 mb-6 md:w-1/3">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="category">
                                    Category
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('Category')}
                                        className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="category" required>
                                        <option>iPhone</option>
                                        <option>samsung</option>
                                        <option>xiaomi</option>
                                        <option>realme</option>
                                    </select>
                                    <div
                                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full px-3 mb-6 md:w-1/3">
                                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    htmlFor="condition">
                                    Condition Type
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('condition')}
                                        className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="condition" required>
                                        <option>excellent</option>
                                        <option>good</option>
                                        <option>fair</option>
                                    </select>
                                    <div
                                        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                        <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <label>
                            <span className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Product Description</span>
                            <textarea
                                {...register('description')}
                                className="block w-full px-4 py-3 mt-1 mb-3 text-gray-700 bg-gray-200 border border-gray-200 rounded form-textarea focus:outline-none"
                                rows="4" placeholder="Product Description"></textarea>
                        </label>

                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                <span className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Select Image</span>
                            </label>
                            <input
                                {...register('image')}
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />

                        </div>


                    </div>
                    <p className='text-red-600 py-2 text-center'>{productError}</p>
                    <div className="flex items-center justify-end p-5 text-center bg-gray-200">
                        <button type="submit"
                            className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddProduct;