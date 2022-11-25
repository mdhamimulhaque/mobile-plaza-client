import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Pages/Shared/components/Loading/Loading';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // ---> loader
    if (loading) {
        return <Loading />
    }
    // ---> user redirect
    if (user) {
        return children
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />
};

export default PrivateRoute;