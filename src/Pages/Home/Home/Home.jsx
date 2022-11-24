import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Offer />
            <Testimonial />
        </div>
    );
};

export default Home;