import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }));
  }


  const {email, password} = formData;

  return (
    <section>
      <h1 className="text-center mt-6 text-3xl font-bold">Sign In</h1>
      <div className="flex justify-center items-center flex-wrap py-12 px-6 max-w-6xl mx-auto">

        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://images.unsplash.com/flagged/photo-1564767609424-270b9df918e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="key" className="w-full rounded-2xl" />
        </div>

        <div className="md:w-[67%] lg:w-[40%] w-full lg:ml-20">

          <form action="" >
           <input 
           className = "mb-6 w-full px-4 py-2 text-xl text-gray-700 border-gray-300 bg-white rounded transition ease-in-out"
           placeholder='Email Address' 
           id = "email" 
           value = {email} 
           onChange = {onChange}
           />

           <div>
            <input 
            type= "password"
            placeholder='Password' 
            value = {password} 
            id = "password" 
            onChange={onChange}
            className = "w-full px-4 py-2 text-xl text-gray-700 border-gray-300 bg-white rounded transition ease-in-out"
            />
           </div>

           <div className='flex justify-between py-6 mb-6 text-sm sm:text-lg'>
            <p>Don't have an account?
              <Link to = "/register" className='text-red-600 ml-1'>Register</Link>
            </p>
            <p>
              <Link to = "/forgot-password" className='text-blue-600 '>Forgot Password?</Link>
            </p>
           </div>
          </form>
          <button type = "submit" className='w-full bg-blue-600 py-3 px-6 rounded shadow-md text-white hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out uppercase text-sm font-medium active:bg-blue-800'>Sign In</button>

          <div className='flex my-4 items-center before:border-t before:border-gray-600 before:flex-1 after:border-t after:border-gray-600 after:flex-1'>
            <p className='text-center mx-4 text-sm font-medium'>OR</p>
          </div>
          <div>
            <button type='submit' className='flex items-center justify-center w-full bg-red-700 uppercase text-white px-7 py-3 font-medium text-sm shadow-md hover:bg-red-800 hover:shadow-lg transition duration-150 ease-in-out active:bg-red-900 active:shadow-lg rounded'>
               <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>Continue with Google</button>
          </div>
          

        </div>
      </div>
    </section>
    
  )
}
