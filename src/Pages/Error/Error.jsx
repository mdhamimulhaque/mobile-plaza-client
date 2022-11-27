import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../../img/404.jpg';

const Error = () => {
    return (
        <section className="flex items-center h-screen sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img className='w-80' src={IMG} alt="" />
                <p className="text-3xl">Oppps!! 404 error</p>
                <Link to="/" className="px-8 py-3 font-semibold rounded bg-gray-300">Back to homepage</Link>
            </div>
        </section>
    );
};

export default Error;