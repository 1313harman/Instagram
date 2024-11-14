import React, { useState,useEffect } from 'react'
import images from './Images'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {auth,db} from './firebase'
import { doc,getDoc } from "firebase/firestore";
import {onAuthStateChanged, signOut} from 'firebase/auth'
function HeaderRight() {
  const gotoLogin = useNavigate()
  const [userDetail,setUserDetail] = useState(null)

  const handleLogin = () =>{
    gotoLogin('/login')
  }

  const fetchUserData = () =>{
    auth.onAuthStateChanged(async(user)=>{
      const docRef = doc(db,"users",user.uid)
      const docSnap = await getDoc(docRef)
      if(docSnap.exists())
      {
        // console.log(docSnap.data())
        setUserDetail(docSnap.data())
      }
      else{
        console.log('User not exist')
        gotoLogin('/login')
      }
    })
  }

  useEffect(() => {
    fetchUserData()
    // console.log(userDetail)
  }, [fetchUserData])
  

  const count = 0
  return (
    <>
        <div className='flex flex-row bg-white justify-center items-center h-[400px] w-[310px] ml-[1102px]'>
            <div className=' flex flex-col py-3 gap-5'> 
                <div className='flex flex-row gap-3 justify-center items-center'>
                  <button><img className='w-12 h-12 rounded-full' src={userDetail?.photo} alt="" /></button>
                  <div className='flex flex-col -space-y-0'>
                      <h1 className='text-sm font-semibold contrast-75'>{userDetail?.fullname || userDetail?.fullName}</h1>
                      <p className=' text-sm text-gray-500'>{userDetail?.username}</p>
                  </div>
                  <button className='text-xs text-sky-400 font-bold ml-3' onClick={handleLogin}>Switch</button>
                </div>


              <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-[156px] justify-center items-center'>
                  <span className='text-sm text-gray-600 font-semibold opacity-80'>Suggested for you</span>
                  <Link to='/explore/people'><span className='text-xs font-semibold '>See all</span></Link>
                </div>

                <div className='flex flex-row gap-3 justify-center items-center'>
                  <button><img className='w-12 h-12' src={images.useImage} alt="" /></button>
                  <div className='flex flex-col -space-y-0'>
                      <h1 className='text-sm font-semibold contrast-75'>UserName_1123</h1>
                      <p className=' text-sm text-gray-500'>Followed by username_0 + {count}..</p>
                  </div>
                  <button className='text-xs text-sky-400 font-bold ml-3'>Follow</button>
                </div>       

                <div className='flex flex-row gap-3 justify-center items-center'>
                  <button><img className='w-12 h-12' src={images.useImage} alt="" /></button>
                  <div className='flex flex-col -space-y-0'>
                      <h1 className='text-sm font-semibold contrast-75'>UserName_1123</h1>
                      <p className=' text-sm text-gray-500'>Followed by username_0 + {count}..</p>
                  </div>
                  <button className='text-xs text-sky-400 font-bold ml-3'>Follow</button>
                </div>

                <div className='flex flex-row gap-3 justify-center items-center'>
                  <button><img className='w-12 h-12' src={images.useImage} alt="" /></button>
                  <div className='flex flex-col -space-y-0'>
                      <h1 className='text-sm font-semibold contrast-75'>UserName_1123</h1>
                      <p className=' text-sm text-gray-500'>Followed by username_0 + {count}..</p>
                  </div>
                  <button className='text-xs text-sky-400 font-bold ml-3'>Follow</button>
                </div>

                <div className='flex flex-row gap-3 justify-center items-center'>
                  <button><img className='w-12 h-12' src={images.useImage} alt="" /></button>
                  <div className='flex flex-col -space-y-0'>
                      <h1 className='text-sm font-semibold contrast-75'>UserName_1123</h1>
                      <p className=' text-sm text-gray-500'>Followed by username_0 + {count}..</p>
                  </div>
                  <button className='text-xs text-sky-400 font-bold ml-3'>Follow</button>
                </div>
              </div>  

          </div>
        </div>
    </>
  )
}

export default HeaderRight