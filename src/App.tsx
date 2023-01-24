import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RequiredRoute from './components/RequiredRoute'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import AllMusic from './pages/AllMusic'
import Users from './pages/Users'
import ManageWorkers from './pages/ManageWorkers'
import Transactions from './pages/Transactions'
import Settings from './pages/Settings'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import UserId from './pages/UserId'
import SingleSong from './pages/SingleSong'
import UnProtected from './components/UnProtected'

function App() {

  return (
    <Suspense fallback={<p>Loading Components</p>}>
      <Routes>
        <Route element={<UnProtected />}>
          <Route path='/' element={<Login />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Route>

        <Route element={<RequiredRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="songs" element={<AllMusic />} />
            <Route path="songs/:id" element={<SingleSong />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserId />} />
            <Route path="manage-workers" element={<ManageWorkers />} />
            <Route path="transactions" element={<Transactions />} />``
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  )
}

export default App
