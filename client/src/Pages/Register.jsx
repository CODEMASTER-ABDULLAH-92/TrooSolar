import React, { useState } from 'react';
import { assets } from '../assets/data';
import {Eye, EyeOff} from "lucide-react"

const Register = () => {
  const [hidepassword,setHidePassword] = useState(true);
  return (
    <>
      {/* Large Screen Layout */}
      <div className='w-full h-screen sm:flex hidden overflow-clip'>
        {/* Image Section */}
        <div className='relative w-1/2 overflow-hidden'>
          <img
            src={assets.loginImage}
            alt="Login Visual"
            className='w-full h-full object-cover'
            loading="lazy"
          />
          <div className='absolute bottom-24 left-12 text-white w-[80%]'>
            <p className='text-lg font-medium leading-relaxed'>
              Providing affordable, sustainable and reliable <br />
              solar energy solutions for millions <br />
              of Nigerians
            </p>
          </div>
          <div className='absolute bottom-6 left-12 flex gap-4'>
            <img src={assets.insta} alt="Instagram" className='h-10 w-10' />
            <img src={assets.whatsApp} alt="WhatsApp" className='h-10 w-10' />
            <img src={assets.twitter} alt="Twitter" className='h-10 w-10' />
            <img src={assets.yt} alt="YouTube" className='h-10 w-10' />
          </div>
        </div>

        {/* Form Section */}
        <div className='w-1/2 bg-[#f5f7ff] flex justify-center items-center'>
          <div className='w-[90%] max-w-[600px] p-6 bg-white rounded-2xl shadow-lg'>
            <form className='space-y-6'>
              <div className='text-center'>
                <img src={assets.logo} alt="Logo" className='w-[200px] mx-auto mb-6' loading="lazy" />
                <h2 className='text-3xl font-semibold'>Create an Account</h2>
                <p className='text-sm text-gray-600 mt-2'>
                  Provide your personal information to help us know you better
                </p>
              </div>

              {/* Desktop Fields */}
              <div className='space-y-4'>
                <div>
                  <label htmlFor="firstName" className='block mb-1 text-sm font-medium text-gray-700'>First Name</label>
                  <input
                    type='text'
                    id='firstName'
                    placeholder='First Name'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div>
                  <label htmlFor="surname" className='block mb-1 text-sm font-medium text-gray-700'>Surname</label>
                  <input
                    type='text'
                    id='surname'
                    placeholder='Surname'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div>
                  <label htmlFor="email" className='block mb-1 text-sm font-medium text-gray-700'>Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>

                <div>
                  <label htmlFor="phone" className='block mb-1 text-sm font-medium text-gray-700'>Phone Number</label>
                  <input
                    type='tel'
                    id='phone'
                    placeholder='Phone Number'
                    className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>

              <button type='submit' className='w-full bg-[#273e8e] text-white py-3 rounded-lg transition duration-200'>
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='w-full min-h-screen sm:hidden block relative'>
        <img src={assets.loginImageForSm} className='w-full h-[40vh] object-cover' alt="Mobile Background" />

        <div className='bg-[#273e8e] absolute top-[31vh] w-full rounded-t-4xl shadow-md p-6 text-center mb-6'>
          <img src={assets.smLogo} alt="Logo" className='mx-auto mb-2 w-28' />
          <h1 className='text-2xl font-bold text-white'>Create an account</h1>
          <p className='text-xs text-white'>Provide your personal information to help us know you better</p>
        </div>

        <form className='space-y-4 p-4 mt-24'>
          <div>
            <label htmlFor="mobileFirstName" className='block mb-1 text-sm font-medium text-gray-700'>First Name</label>
            <input
              type='text'
              id='mobileFirstName'
              placeholder='First Name'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor="mobileSurname" className='block mb-1 text-sm font-medium text-gray-700'>Surname</label>
            <input
              type='text'
              id='mobileSurname'
              placeholder='Surname'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor="mobileEmail" className='block mb-1 text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='mobileEmail'
              placeholder='Email'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor="mobilePhone" className='block mb-1 text-sm font-medium text-gray-700'>Phone Number</label>
            <input
              type='tel'
              id='mobilePhone'
              placeholder='Phone Number'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label htmlFor="bvn" className='block mb-1 text-sm font-medium text-gray-700'>BVN Number</label>
            <input
              type='number'
              id='bvn'
              placeholder='BVN Number'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div className='mb-4'>
  <label htmlFor="password" className='block mb-1 text-sm font-medium text-gray-700'>Password</label>
  
  <div className='relative'>
    <input
      type={hidepassword ? "password":"text"}
      id='password'
      placeholder='Password'
      className='w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
    <div className='absolute inset-y-0 right-3 flex items-center cursor-pointer'>
     {hidepassword ?<EyeOff onClick={()=>setHidePassword(!hidepassword)} size={24}/> :  <Eye size={24}onClick={()=>setHidePassword(!hidepassword)} /> } 
    </div>
  </div>
</div>

          <div>
            <label htmlFor="code" className='block mb-1 text-sm font-medium text-gray-700'>Referral Code (Optional)</label>
            <input
              type='number'
              id='code'
              placeholder='Referral Code'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button type='submit' className='w-full bg-[#273e8e] text-white py-3 rounded-full'>
            Create Account
          </button>

          <p className='text-center text-sm'>I already have an account</p>

          <button type='button' className='w-full bg-[#e8a91d] text-white py-3 rounded-full'>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;