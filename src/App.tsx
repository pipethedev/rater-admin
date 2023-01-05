import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import RequiredRoute from './components/RequiredRoute'
import Layout from './components/Layout'
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

function App() {

  return (
    // <Suspense fallback={<p>Loading Components</p>}>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        {/* Private routes */}
        <Route element={<RequiredRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="allmusic" element={<AllMusic />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserId />} />
            <Route path="manage-workers" element={<ManageWorkers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="my-profile" element={<MyProfile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        {/* 404 page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    // </Suspense>
  )
}

export default App
