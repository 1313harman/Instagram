import React from 'react'
import images from './Images'
import { Link, useNavigate } from 'react-router-dom'

function Wellcome() {
  return (
    <>
            <div>
                <div className='flex flex-row justify-center items-center gap-5 mt-5 -ml-14'>
                    <div className='flex'>
                            <img className='h-[580px] w-[470px]' src={images.wellimg} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 border border-black border-opacity-15 px-11 py-14'>
                        <img className='h-[80px] w-[250px]' src={images.instaText} alt="" />
                        <img className='h-[100px] w-[100px] opacity-40' src={images.useImage} alt="" />
                        <button className='rounded-lg bg-customBlue px-8 py-1 text-white font-semibold'>Continue as user</button>
                        <span>Not user?<Link to='/login' ><span className='text-customBlue font-semibold max-w-full'> Switch accounts</span></Link></span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Wellcome