import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loading from '../../Pages/Shared/components/Loading/Loading';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();

    // ---> loader
    if (loading || isSellerLoading) {
        return <Loading />
    }
    // ---> user redirect
    if (user && isSeller) {
        return children
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />
};

export default SellerRoute;