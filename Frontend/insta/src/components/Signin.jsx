import React, { useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'
import images from './Images'
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc,setDoc } from "firebase/firestore";
import {auth,db} from './firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
function Signin() {
    const [userName,setUserName] = useState('')
    const [MobileNumber,setMobileNumber] = useState('')
    const [Password,setPassWord] = useState('')
    const [fullName,setFullName] = useState('') 
    const gotoLogin = useNavigate();
    let dataField = false
    const handleOnSubmit = async (e) =>{
        e.preventDefault();
        try {
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth,userName,Password)
            const user = userCredential.user

            if(user)
            {
                await setDoc(doc(db,"users",user.uid),{
                    username:userName,
                    fullname:fullName,
                    password:Password,
                    mobilenumber:MobileNumber
                })
                console.log("User Registerd Succesfully")
                gotoLogin('/login')
            }
        } catch (error) {
            console.log(error.message)
        }
        
    }

    const handleLogWithGoogle = (event) =>{
        event.preventDefault();
        const provider =new GoogleAuthProvider()
        signInWithPopup(auth,provider).then(async(result)=>{
            let user=result.user
            console.log(result)
            if(result)
            {
                await setDoc(doc(db,"users",user.uid),{
                    fullName:user.displayName,
                    mobilenumber:user.phoneNumber,
                    username:user.email,
                    password:'',
                    photo:user.photoURL
                })
                dataField = true
            }
            if(dataField)
            {
                console.log('User Registered Successfully')
                gotoLogin('/app/home')
            }
        })
    }


  return (
    <>
        <div>
        <div className='flex flex-col gap-3 justify-center items-center mt-8'>
                    <div className='flex flex-col justify-center items-center gap-4 border border-black border-opacity-15 px-11 py-14'>
                        <img className='h-[50px] w-[150px]' src={images.instaText} alt="" />
                        <p className='max-w-64 mb-2 text-center text-gray-700 opacity-65 font-bold'>Sign up to see photos and videos from your friends.</p>
                        <div className='flex justify-center items-center gap-2'>
                                <button ><img className='absolute z-10 h-[18px] w-auto -mt-2 ml-12' src={images.facebook2} alt="" /></button>
                                <button type='submit' className='bg-customBlue w-72 rounded-lg py-1' onClick={handleLogWithGoogle}><span className='text-white font-semibold text-md '>Log in with facebook</span></button>
                        </div>
                        <div className='flex gap-3 -mt-4 justify-center items-center'>
                                <hr className=" w-[110px] h-px my-8 bg-black border-0 opacity-25 justify-start"/>
                                <span className='text-xs text-black opacity-50 font-bold'>OR</span>
                                <hr className=" w-[110px] h-px my-8 bg-black border-0 opacity-25 justify-end"/>
                        </div>
                        <div className='flex flex-col gap-2 -mt-4'>
                            <input type="text" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Mobile Number' onChange={(e)=>setMobileNumber(e.target.value)}/>
                            <input type="password" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Password' onChange={(e)=>setPassWord(e.target.value)}/>
                            <input type="text" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)}/>
                            <input type="text" className='border-black border rounded-sm h-8 w-[260px] border-opacity-20 px-2 placeholder-zinc-700 placeholder-opacity-75 text-xs' placeholder='Username' onChange={(e)=>setUserName(e.target.value)}/>
                            <p className='text-xs max-w-[260px] text-center text-black opacity-75 mt-2'>People who use our service may have uploaded your contact information to Instagram <button className='text-blue-900'>Learn More</button></p>
                            <p className='text-xs max-w-[260px] text-center text-black opacity-75 mt-2'>By signing up, you agree to our <Link><span className='text-blue-900'>Terms , Privacy Policy and Cookies Policy .</span></Link></p>
                            <button type="submit" className='bg-customBlue rounded-lg py-1 text-white mt-5 text-sm font-bold' onClick={handleOnSubmit}>Sign up</button>

                        </div>
   
                    </div>
                    <div className='flex justify-center w-[386px] gap-1 items-center  border border-black border-opacity-15 px-11 py-4'>
                        <span className='text-sm'>Have an account? </span><Link to='/login'><span className='text-customBlue font-bold opacity-85 text-sm'>Log in</span></Link>
                    </div>
                    <span className='text-sm mt-1'>Get The app.</span> 
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
    </>
  )
}

export default Signin