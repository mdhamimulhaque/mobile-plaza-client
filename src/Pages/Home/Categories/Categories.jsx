import React from 'react';
import CategoryCard from '../../Shared/components/CategoryCard/CategoryCard';

const Categories = () => {
    const phonesCategories = [
        {
            id: 1,
            name: 'Samsung',
            img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 2,
            name: 'iPhone',
            img: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
        },
        {
            id: 3,
            name: 'Xiaomi',
            img: 'https://images.unsplash.com/photo-1560677519-9e47f8731d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 4,
            name: 'Oppo',
            img: 'https://images.unsplash.com/photo-1644982649363-fae51da44eac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
    ]
    return (
        <div className='px-6 py-14'>
            <h2 className='text-xl sm:text-3xl font-semibold text-indigo-600 mb-5'>All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">

                {
                    phonesCategories.map(phnCategory =>
                        <CategoryCard key={phnCategory.id}
                            phnCategory={phnCategory}
                        />)
                }
            </div>
        </div>
    );
};

export default Categories;