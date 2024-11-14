import React, { useState } from 'react'
import HeaderLeft from '../components/HeaderLeft'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderRight from '../components/HeaderRight'



function Layout2() {
  return (
    <>
        <HeaderLeft/>
        <HeaderRight/>
          <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout2