import React from 'react'
import Aos from 'aos'



function OpenMenu({setOpenMenu}) {

  const handleOpenMenuClose = () =>{
    setOpenMenu(false)
    document.body.style.overflowY = 'scroll'
  }

  return (
    <>
            <div className='fixed inset-0 flex justify-center items-center  bg-black bg-opacity-65'>
              <div className='absolute flex flex-col    h-[440px] w-[400px]   bg-white rounded-xl'>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-red-600 font-bold text-sm opacity-80'>Report</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-red-600 font-bold text-sm opacity-80'>Unfollow</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>Add to favorites</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>Go to post</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>Share to...</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>Copy link</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>Embed</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10'><span className='text-black text-sm opacity-80'>About this account</span></button>
                  <button className='border-b-2 border-black py-3 border-opacity-10' onClick={handleOpenMenuClose}><span className='text-black text-sm opacity-80'>Cancel</span></button>
              </div>
            </div>
    </>
  )
}

export default OpenMenu