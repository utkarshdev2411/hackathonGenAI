import React from 'react'
import Navbar from './components/Navbar'
import ApptBook from './pages/ApptBook'
import DrDetails from './pages/DrDetails'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Layout from './components/Layout'

export default function App() {
  return (
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drdetails" element={<DrDetails />} />
          <Route path="/apptbook" element={<ApptBook />} />
        </Route>
      </Routes>
  )
}
