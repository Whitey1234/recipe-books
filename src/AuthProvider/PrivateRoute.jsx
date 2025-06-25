import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { Navigate, useLocation } from 'react-router';
import Loding from '../Component/Loding';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} =use(AuthContext)
    if (loading){
        return  <Loding></Loding>
    }

    if(user && user?.email){

 return children
 
    }
    return <Navigate   state={location.pathname} to={'/login'} ></Navigate>
}
export default PrivateRoute;