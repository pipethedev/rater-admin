import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectCurrentToken, setUser } from '../features/auth/authSlice'
import { useAppSelector } from '../hocks/hocks'

const RequiredRoute = () => {
  // const token = useAppSelector(selectCurrentToken)
  const token = localStorage.getItem('token')
  const location = useLocation()

  // console.log(!!token, 'token')

  // console.log(token?.payload?.auth?.token, 'setUser')

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredRoute
