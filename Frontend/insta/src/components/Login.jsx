import React, { useState,useEffect } from 'react'
import {useMediaQuery} from 'react-responsive'
import images from './Images'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import HomePage from './HomePage'
import { doc,getDoc } from "firebase/firestore";
import {auth,db} from './firebase'
import LoginWithPhone from './LoginWithPhone'

function Login() {
    const [details,setDetails] = useState('')
    const [password,setPassWord] = useState('')
    const [showPhonePage,setShowPhonePage] = useState(false)
    const [fieldData,setFieldData] = useState(null)
    const gotoHome = useNavigate() 


    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef = doc(db,"users",user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists())
            {
                console.log(docSnap.data())
                setFieldData(docSnap.data())
            }
            else{
                console.log("User not loged in!!")
            }
        })
        
    }
    useEffect(() => {
      if(fieldData)
      {
        if((details === fieldData.mobilenumber && password === fieldData.password) || (details === fieldData.username && password === fieldData.password))
        {
            console.log("User Login Succefully")
            gotoHome('/app/home')
        }
        else{
            console.log("Password or Email/Mobile Number invalid")
        }
      }
      console.log("Data not field!!")

    }, [fieldData])

    const handleLogWithPhone = () =>{
        setShowPhonePage(true)
    }

  return (
    <>
        <div className='flex justify-center items-center -mt-20'>
                <div className='flex flex-row justify-center items-center gap-5 mt-5 -ml-14'>
                    <div className='flex'>
                            <img className='h-[650px] w-[500px]' src={images.wellimg} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center mt-32'>
                    <div className='flex flex-col justify-center items-center gap-4 border border-black border-opacity-15 px-11 py-4'>
                        <img className='h-[66px] w-[199px] mb-5 mt-10' src={images.instaText} alt="" />
                        <div className='flex flex-col gap-2'>
                            <input type="text" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Phone number, username or email' onChange={(e)=>setDetails(e.target.value)}/>
                            <input type="password" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Password' onChange={(e)=>setPassWord(e.target.value)}/>
                            <button type="submit" className='bg-customBlue rounded-lg py-1 text-white mt-2 text-sm font-bold' onClick={handleOnSubmit}>Log in</button>
                            <div className='flex gap-3 justify-center items-center'>
                                <hr className=" w-[110px] h-px my-8 bg-black border-0 opacity-25 justify-start"/>
                                <span className='text-xs text-black opacity-50 font-bold'>OR</span>
                                <hr className=" w-[110px] h-px my-8 bg-black border-0 opacity-25 justify-end"/>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <button><img className='h-[18px] w-auto' src={images.fbImage} alt="" /></button>
                                <button><span className='text-blue-500 font-semibold text-md'>Log in with facebook</span></button>
                            </div>
                        </div>
                        <button><span className=' font-semibold text-black text-sm' onClick={handleLogWithPhone}>Log in with Phone Number</span></button>
                        <Link to="#"><span className='text-xs opacity-80'>Forgot Password?</span></Link>         
                    </div>
                    <div className='flex justify-center w-[352px] gap-1 items-center  border border-black border-opacity-15 px-11 py-4'>
                        <span className='text-sm'>Don't have an account? </span><Link to='/signup'><span className='text-customBlue font-semibold text-sm'>Sign up</span></Link>
                    </div>
                    <span className='text-sm'>Get The app.</span> 
                    <div className='flex justify-center items-center -space-x-20 -mt-4'>
                        <div>
                            <button><img className='h-[150px] w-[250px]' src={images.googlePlay} alt="" /></button>
                        </div>
                        <div className=''>
                            <button><img className='h-[150px] w-[210px]' src={images.microsoft} alt="" /></button>
                        </div>
                    </div>       
                </div>
            </div>  
            {showPhonePage && 
                <>
                    <LoginWithPhone/>
                </>
            }
    </>
  )
}

export default Login