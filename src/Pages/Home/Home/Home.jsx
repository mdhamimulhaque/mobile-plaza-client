import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Offer from '../Offer/Offer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertisement />
            <Categories />
            <Offer />
            <Testimonial />
        </div>
    );
};

export default Home;