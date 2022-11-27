import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import BookingModal from '../../Shared/components/BookingModal/BookingModal';
import Loading from '../../Shared/components/Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';

const SingleCategory = () => {
    const products = useLoaderData();
    const [modalData, setModalData] = useState({})
    const [isModalOpen, setIsOpenModal] = useState(false);
    const { loading, setLoading } = useContext(AuthContext);



    if (loading) {
        return <Loading />
    } else {
        setLoading(false)
    }

    // --->handle modal 
    const handleModalOpen = (e) => {
        setModalData(e);
        setIsOpenModal(!isModalOpen)
    }

    const handleCloseModal = () => {
        setModalData('');
        setIsOpenModal(!isModalOpen)
    }





    return (
        <section className='xl::h-screen'>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-indigo-600 capitalize lg:text-4xl">Total Products ({products?.length})</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {
                        products.map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                                handleModalOpen={handleModalOpen}
                            />)
                    }
                </div>

                <BookingModal
                    isModalOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                    modalData={modalData}
                    setIsOpenModal={setIsOpenModal}
                />

            </div>
        </section>
    );
};

export default SingleCategory;