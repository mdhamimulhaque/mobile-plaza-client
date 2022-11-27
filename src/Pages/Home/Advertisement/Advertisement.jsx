import React from 'react';
import AdvertisementCard from '../../Shared/components/AdvertisementCard/AdvertisementCard';

const Advertisement = () => {
    return (
        <div className='px-6 pb-20'>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 mb-5'>Advertisement</h2>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
                <AdvertisementCard />
                <AdvertisementCard />
                <AdvertisementCard />
                <AdvertisementCard />
                <AdvertisementCard />
            </section>
        </div>
    );
};

export default Advertisement;