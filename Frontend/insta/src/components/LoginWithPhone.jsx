import React, { useState } from 'react'
import {RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth,db } from './firebase'; 
import { parsePhoneNumber } from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom';
import { doc,setDoc } from "firebase/firestore";



function LoginWithPhone() {
    const [phoneNumber,setPhoneNumber] = useState(null)
    const [otpPressed,setOtpPressed] = useState(false)
    const gotoHome = useNavigate()
    const [user,setUser] = useState(null)
    const [OTP,setOTP] = useState('')

    const sendOtp = async () =>{
      try {      
        const reCAPTCHA =   new RecaptchaVerifier(auth,"recaptcha",{})
        const confirmation = await signInWithPhoneNumber(auth,phoneNumber,reCAPTCHA)
        console.log(confirmation)
        setUser(confirmation)
      } catch (error) {
        console.log("Error",error.message)
      }
   
      setOtpPressed(true)
      console.log(phoneNumber)
    }

    const verifyOTP = async () =>{
      try {
       const data =await user.confirm(OTP)
       console.log(data)
      //  const auth = getAuth()
      //  const userCredential = await createUserWithEmailAndPassword(auth,phoneNumber)
      //  const user = userCredential.user

      //  if(user)
      //  {
      //      await setDoc(doc(db,"users",user.uid),{
      //          username:'',
      //          fullname:'',
      //          password:'',
      //          mobilenumber:data?.user?.phoneNumber,
      //      })
      //      console.log("User Registerd Succesfully")
      //      gotoLogin('/login')
      //  }
      } catch (error) {
        console.log(error.message)
      }
      
    }

  return (
<div className='flex flex-col justify-center items-center'>
  <div className='flex justify-center items-center'>
    <div className='absolute z-40 flex justify-center items-center -mt-[1150px]'>
      <div className='fixed flex justify-center items-center h-[2000px] w-[2000px]  bg-black bg-opacity-65'>
          <div className='absolute flex h-auto w-auto justify-center items-center mt-48'> 
              <div  className='flex flex-col   h-[240px] w-[310px]  bg-white rounded-xl justify-center items-center px-1'>
                {otpPressed ? (
                  <>
                      <input type="number" className='border-b-2 rounded-lg bg-zinc-200 h-[29px] w-[250px]'placeholder=' OTP ' onChange={(e)=>setOTP(e.target.value)}/>
                      <button type="submit" className='bg-green-500 rounded-lg py-1 text-white mt-2 text-sm font-bold w-[98px]' onClick={verifyOTP}>Check OTP</button>
                  </>
                  ):(
                      <>
                          <PhoneInput
                            country={"in"}
                            value={phoneNumber}
                            onChange={(phoneNumber)=>setPhoneNumber("+" + phoneNumber)}
                          />                          
                          {/* <input type="tel" className='border-b-2 rounded-lg bg-zinc-200 h-[29px] w-[250px]'placeholder='  Phone Number' onChange={(e)=>setPhoneNumber(e.target.value)}/> */}
                          <button type="submit" className='bg-customBlue rounded-lg py-1 text-white mt-2 text-sm font-bold w-[98px]' onClick={sendOtp}>Send OTP</button>   
                          <div id="recaptcha"></div>
                      </>
                  )
                }
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LoginWithPhone