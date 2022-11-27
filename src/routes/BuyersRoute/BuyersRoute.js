import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

import Loading from '../../Pages/Shared/components/Loading/Loading';


const BuyersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    // ---> loader
    if (loading || isBuyerLoading) {
        return <Loading />
    }
    // ---> user redirect
    if (user && isBuyer) {
        return children
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />
};

export default BuyersRoute;