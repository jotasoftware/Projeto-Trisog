import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebaseConfig'
import Loader from '../Loader/Loader'
import styles from './ProtectedRoute.module.css'

interface ProtectedRouteProps{
    element: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const [user, loading] = useAuthState(auth)

    if (loading) return <div className={styles.loader}><Loader></Loader></div>

    return user ? element : <Navigate to={'/login'} replace />
}

export default ProtectedRoute;