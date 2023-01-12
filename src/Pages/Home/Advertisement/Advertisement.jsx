import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from '../../Shared/components/AdvertisementCard/AdvertisementCard';
import Loading from '../../Shared/components/Loading/Loading';

const Advertisement = () => {
    const { data: advertisementProduct, isLoading } = useQuery({
        queryKey: ['advertisement'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/advertisement`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='px-6 pt-20'>
            {
                advertisementProduct.length > 0 &&
                <>
                    <h2 className='text-xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 mb-5'>Advertisement</h2>
                    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 '>

                        {
                            advertisementProduct.map(advertise =>
                                <AdvertisementCard
                                    key={advertise._id}
                                    advertise={advertise}
                                />
                            )
                        }
                    </section>
                </>
            }

        </div>
    );
};

export default Advertisement;