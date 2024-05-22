import React from 'react'
import ApptBook from './pages/ApptBook'
import DrDetails from './pages/DrDetails'
import Home from './pages/Home'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Layout from './components/Layout';
import {ToastContainer} from 'react-toastify'

export default function App() {
  return (
    <>
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drdetails" element={<DrDetails />} />
          <Route path="/apptbook" element={<ApptBook />} />
        </Route>
      </Routes>
      </>
  )}