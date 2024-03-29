import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken, setUser } from '../features/auth/authSlice'
import { useAppSelector } from '../hocks/hocks'

const UnProtected = () => {

    const token = useAppSelector(selectCurrentToken)
    const location = useLocation()

    return !token ? <Outlet /> : <Navigate to="/dashboard" state={{ from: location }} replace />
}

export default UnProtected
