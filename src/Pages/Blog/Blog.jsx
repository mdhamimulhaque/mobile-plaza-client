import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/components/Loading/Loading';



const Blog = () => {
    const { data: blogsItems = [], isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-plaza-server.vercel.app/blogs`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }
    return (


        <div className="flex flex-wrap gap-2 justify-center my-20 px-6">
            {
                blogsItems.map(item =>
                    <div key={item.id} className="p-6 md:1/2 xl:w-1/4 shadow-lg">
                        <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">{item.qn}</h1>
                        <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">{item.ans}</p>
                    </div>
                )
            }
        </div>

    );
};

export default Blog;