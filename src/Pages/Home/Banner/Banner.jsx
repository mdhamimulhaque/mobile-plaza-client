import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden">

            <div className="absolute w-full h-full bg-gradient-to-t from-indigo-500 to-indigo-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)" }}>
                <img src="https://img.freepik.com/free-photo/woman-wearing-wireless-earbuds-using-mobile-phone_53876-97084.jpg?w=1060&t=st=1669273312~exp=1669273912~hmac=f3724759c26680c4eb716c148c1cef72b00c35c2114d4c86d7c13be28a6c2b42" alt="" className="absolute w-full h-full object-cover object-top opacity-20" />
            </div>

            <div className="hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full">
                <img src="https://fancytailwind.com/static/smartphone-app2-bc19641ca2bea18b4274be13c9780b1c.png" alt="" className="relative mx-auto sm:w-40 md:w-60 xl:w-64" />
            </div>

            <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">
                <h2 className="text-xl sm:text-3xl font-mulish">Classified platform, a Marketplace Connecting </h2>
                <h1 className="text-5xl sm:text-7xl font-mulish">Buyers and Sellers</h1>
                <p className="max-w-lg py-5 font-thin leading-relaxed">Phone Bazar is the fastest online marketplace. Start buying and selling today! Make shopping SIMPLE, SECURE and FAST on the largest marketplace. Discover what you need and sell all sorts of products in our simple yet powerful platform.</p>

            </div>

        </div>
    );
};

export default Banner;