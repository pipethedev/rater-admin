import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken } from '../features/auth/authSlice'
import { useAppSelector } from '../hocks/hocks'
// import useAuth from '../hooks/useAuth';


const RequiredRoute = () => {
  const  token  = useAppSelector(selectCurrentToken)
  const location = useLocation()

  return token ? <Outlet /> : <Navigate to="/dashboard" state={{ from: location }} replace />
}

export default RequiredRoute
