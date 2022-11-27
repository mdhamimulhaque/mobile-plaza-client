import React from 'react';

const AdvertisementCard = () => {
    return (
        <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">

            {/* :CARD IMAGE & CATEGORY */}
            <div className="relative w-full overflow-hidden">
                {/* ::Image */}
                <img src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='img' />
                {/* ::Category */}
                <h2 className="absolute top-6 left-6 inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-indigo-600 cursor-pointer">Category</h2>
            </div>

            {/* :CARD BODY */}
            <div className="my-6 py-3 px-8 flex flex-col justify-around ">
                {/* ::Title */}
                <h1 className="title-font text-2xl font-bold text-gray-800 antialiased">Fancy Blog Card 6 you're gonna like !</h1>
                <div className="price_box flex gap-3 mt-4">
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Original Price</small>
                        <span className='font-semibold text-xl text-red-600 line-through'>$originalPrice</span>
                    </div>
                    <div className='flex flex-col my-1'>
                        <small className='text-xs'>Resell Price</small>
                        <span className='font-semibold text-xl text-indigo-600'>$resellPrice</span>
                    </div>
                </div>
                {/* ::Excerpt */}
                <p className="line-clamp-8 py-5 overflow-hidden leading-relaxed text-sm text-gray-500 text-left font-medium cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum cum autem incidunt magni voluptatum alias reiciendis possimus doloremque, enim consequuntur quia. Voluptas exercitationem soluta debitis labore aliquam molestiae illum?</p>
                {/* ::Read more */}
                <a href="#link" className="self-start p-2 bg-indigo-600 bg-clip-text text-transparent font-medium no-underline transform hover:scale-105">Read more</a>
            </div>

        </div>
    );
};

export default AdvertisementCard;