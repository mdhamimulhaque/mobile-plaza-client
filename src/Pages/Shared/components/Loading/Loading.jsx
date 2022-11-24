import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex items-end text-7xl'>
                <span>L</span>
                <div className="relative w-12 h-12 animate-spin rounded-full bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-800 ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-indigo-200 rounded-full border-2 border-white"></div>
                </div>
                <span>ading...</span>
            </div>
        </div>
    );
};

export default Loading;