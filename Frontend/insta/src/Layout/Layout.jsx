import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'




function Layout() {

  return (
    <>

        <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout