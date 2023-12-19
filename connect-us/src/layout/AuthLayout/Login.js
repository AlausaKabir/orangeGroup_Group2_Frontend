import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-80 w-72 md:w-[400px]">
        <h1 className="text-3xl font-bold text-center ">Welcome Back</h1>
        <div className='w-8 bg-black h-[3px] mb-6'></div>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            className="border border-blue-400 w-full py-2  mt-4 px-5 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            className="border border-blue-400 w-full py-2 mt-4 px-5 rounded-md outline-none"
          />

          <button
            type="submit"
            className=" w-full py-2  mt-4 px-5 rounded-md bg-orange-500 text-white font-bold hover:bg-white hover:border hover:border-black hover:text-black"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-sm flex space-x-14 md:space-x-60">
          <Link to='/ResetPassword' className='text-blue-500 hover:underline'>Forgot password?</Link>
          <Link to='/SignUp' className='text-blue-500 hover:underline'>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
