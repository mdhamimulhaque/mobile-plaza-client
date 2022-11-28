import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from '../../Shared/components/CategoryCard/CategoryCard';
import Loading from '../../Shared/components/Loading/Loading';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/categories`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='px-6 py-14'>
            <h2 className='text-xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 mb-5'>All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">

                {
                    categories.map(phnCategory =>
                        <CategoryCard key={phnCategory._id}
                            phnCategory={phnCategory}
                        />)
                }
            </div>

        </div>
    );
};

export default Categories;