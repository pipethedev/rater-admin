import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken } from '../features/auth/authSlice'
import { useAppSelector } from '../hocks/hocks'

const RequiredRoute = () => {
  const token = useAppSelector(selectCurrentToken)
  const location = useLocation()

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredRoute
