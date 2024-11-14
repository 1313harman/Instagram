import React from 'react'
import Aos from 'aos'
import images from './Images'
function OpenStory({setIsOpenStory}) {
    const handleOpenStoryClose = () =>{
        setIsOpenStory(false)
        document.body.style.overflowY = 'scroll'
      }
  return (
    <div className='fixed inset-0 flex justify-center items-center  bg-black bg-opacity-90'>
    <div className=' flex flex-col justify-center items-center    h-[650px] w-auto   bg-white bg-opacity-45 rounded-xl'>
        <video className='h-[650px]'  autoPlay muted playsInline controls  src={images.videoPost}></video>
    </div>
  </div>
  )
}
// <button className=' py-3 border-opacity-10' onClick={handleOpenStoryClose}><img className='h-9 w-9 text-right' src={images.InstaClose} alt="" /></button>
export default OpenStory