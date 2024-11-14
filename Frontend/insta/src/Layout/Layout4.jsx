import React from 'react'
import OpenStory from '../components/OpenStory'
import { Outlet } from 'react-router-dom'
import HeaderStoryTop from '../components/HeaderStoryTop'

function Layout4() {
  return (
    <>
        <HeaderStoryTop />
            <Outlet/>
    </>
  )
}

export default Layout4