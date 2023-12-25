import React from 'react'
import Loading from './../component/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../confige/confige';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoutes({children}) {
    const [user,loading] = useAuthState(auth)
    const location = useLocation()
    if(loading) {
        return <Loading/>
    }
    if(!user){
        return <Navigate to='/login' state={{
            from:location
        }}replace/>
        return children
    }
  return (
    <div>PrivateRoutes</div>
  )
}

export default PrivateRoutes