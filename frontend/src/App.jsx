import React from 'react'
import Navbar from './components/Navbar'
import ApptBook from './pages/ApptBook'
import DrDetails from './pages/DrDetails'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drdetails" element={<DrDetails />} />
        <Route path="/apptbook" element={<ApptBook />} />
      </Routes>
    </div>
  )
}
