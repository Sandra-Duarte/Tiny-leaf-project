import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Footer from '../Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>

    <Outlet/>

    <Footer />
    </>
  )
}

export default Layout