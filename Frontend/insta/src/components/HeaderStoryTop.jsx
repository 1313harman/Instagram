import React from 'react'
import images from './Images'
import { useNavigate } from 'react-router-dom'

function HeaderStoryTop() {
    const gotoHome = useNavigate()
    function openHome(){
        gotoHome('/app/home')
    }
  return (
    <>
        <div className='flex flex-row gap-28 justify-between items-center'>
            <img className='z-50 h-7 mt-4 ml-4' src={images.instaTextWhite} alt="" />
            <button className='absolute z-50 ml-[1480px]'onClick={openHome}><img className='h-7 mt-4' src={images.instaCloseWhite} alt="" /></button>
        </div>
    </>
  )
}

export default HeaderStoryTop