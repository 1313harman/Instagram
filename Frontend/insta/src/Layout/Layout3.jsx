import React from 'react'
import People from '../components/People'
import { Outlet } from 'react-router-dom'
import HeaderLeft from '../components/HeaderLeft'
import Footer from '../components/Footer'

function Layout3() {
  return (
    <>
        <HeaderLeft/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout3