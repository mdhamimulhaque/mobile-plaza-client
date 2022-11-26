import React from 'react';

const AddProduct = () => {
    return (
        <div class="flex p-1 py-12 bg-indigo-50 place-content-center">
            <div class="max-w-lg overflow-hidden border bg-white border-gray-200 rounded-lg">
                <form class="w-full max-w-lg">
                    <div class="p-10 pb-6">
                        <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-3 text-indigo-600'>Add Product</h2>

                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full px-3 mb-6">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="productName">
                                    Product Name
                                </label>
                                <input
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="productName" type="text" placeholder="Product Name" />
                            </div>
                            <div class="w-full px-3 mb-6">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="location">
                                    Location
                                </label>
                                <input
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="productName" type="text" placeholder="location" />
                            </div>

                            <div class="w-full px-3 mb-6 md:w-1/2 ">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="ordinalPrice">
                                    Ordinal Price
                                </label>
                                <input
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                                    id="ordinalPrice" type="text" placeholder="Ordinal Price" />
                            </div>

                            <div class="w-full px-3 mb-6 md:w-1/2 ">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="resellPrice">
                                    Resell Price
                                </label>
                                <input
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white"
                                    id="resellPrice" type="text" placeholder="Resell Price" />
                            </div>


                            <div class="w-full px-3 mb-6 md:w-1/3">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="category">
                                    Category
                                </label>
                                <div class="relative">
                                    <select
                                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="category">
                                        <option>iPhone</option>
                                        <option>samsung</option>
                                        <option>xiaomi</option>
                                        <option>realme</option>
                                        <option>oppo</option>
                                        <option>huawei</option>
                                    </select>
                                    <div
                                        class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <div class="w-full px-3 mb-6 md:w-1/3">
                                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                    for="condition">
                                    Condition Type
                                </label>
                                <div class="relative">
                                    <select
                                        class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="condition">
                                        <option>excellent</option>
                                        <option>goog</option>
                                        <option>fair</option>
                                    </select>
                                    <div
                                        class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <label>
                            <span class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Address</span>
                            <textarea
                                class="block w-full px-4 py-3 mt-1 mb-3 text-gray-700 bg-gray-200 border border-gray-200 rounded form-textarea focus:outline-none"
                                rows="4" placeholder="Product Description"></textarea>
                        </label>

                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                <span class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">Select Image</span>
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />

                        </div>


                    </div>
                    <div class="flex items-center justify-end p-5 text-center bg-gray-200">
                        <button type="button"
                            class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddProduct;