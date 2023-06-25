import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({
    redirectPath = "/",
    children
}) => {
    const isLogin = useSelector((state) => state.userReducer.isLogin)
    if (!isLogin) {
        return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />
}

export default Protected