import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/components/Loading/Loading';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    // ---> loader
    if (loading || isAdminLoading) {
        return <Loading />
    }
    // ---> user redirect
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/log-in' state={{ from: location }} replace />
};

export default AdminRoute;