import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });


  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://connectus-4ev0.onrender.com/auth/login', credentials)
      .then((response) => {
        const { status, data } = response;
        console.log(data, 'response.data');

        if (status === 200 && data.status === 'success') {
          const { user, accessToken } = data.data;

          localStorage.setItem('userData', JSON.stringify(user));
          localStorage.setItem('accessToken', accessToken);

          login(user);

          toast.success('Login successful');
          navigate('/Dashboard');
        } else {
          toast.error('Unexpected response from the server. Please try again later.');
        }
      })
      .catch((err) => {
        if (err.response) {
          const { data: errorData, status } = err.response;
          console.error(`Server responded with error status: ${status}`, errorData);

          if (errorData && errorData.message) {
            toast.error(`Error: ${errorData.message}`);
          } else {
            toast.error('An unexpected error occurred. Please try again later.');
          }
        } else if (err.request) {
          console.error('No response received from the server. Check your internet connection or try again later.');
          toast.error('No response received from the server. Check your internet connection or try again later.');
        } else {
          console.error('Error setting up the request:', err.message);
          toast.error('An unexpected error occurred. Please try again later.');
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto h-80 w-72 md:w-[400px]">
        <ToastContainer />
        <h1 className="text-3xl font-bold text-center ">Welcome Back</h1>
        <div className='w-8 bg-black h-[3px] mb-6'></div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
            className="border border-blue-400 w-full py-2 mt-4 px-5 rounded-md outline-none"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
            className="border border-blue-400 w-full py-2 mt-4 px-5 rounded-md outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 px-5 rounded-md bg-orange-500 text-white font-bold hover:bg-white hover:border hover:border-black hover:text-black"
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
  );
};

export default Login;
