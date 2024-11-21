// import React from 'react'

// import loginImg from '../assets/login.jpg'

// export default function Login() {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//         <div className='hidden sm:block'>
//             <img className='w-full h-full object-cover' src={loginImg} alt="" />
//         </div>

//         <div className='bg-gray-800 flex flex-col justify-center'>
//             <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
//                 <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
//                 <div className='flex flex-col text-gray-400 py-2'>
//                     <label>Username</label>
//                     <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
//                 </div>
//                 <div className='flex flex-col text-gray-400 py-2'>
//                     <label>Password</label>
//                     <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
//                 </div>
//                 <div className='flex justify-between text-gray-400 py-2'>
//                     <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
//                     <p>Forgot Password</p>
//                 </div>
//                 <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                
//             </form>
//         </div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assets/logo.jpg'

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send login credentials to your backend
      // For this example, we'll just navigate to dashboard
      console.log('Login Data:', formData);
      
      // Navigate to dashboard page
      navigate('/dashboard');
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="Login background" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input 
                        className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${errors.username ? 'border-2 border-red-500' : ''}`}
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
                </div>
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input 
                        className={`p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${errors.password ? 'border-2 border-red-500' : ''}`}
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                </div>
                
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'>
                        <input 
                            className='mr-2' 
                            type="checkbox" 
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        /> 
                        Remember Me
                    </p>
                    <p className='text-blue-400 cursor-pointer hover:underline'>Forgot Password</p>
                </div>
                
                <button 
                    type="submit"
                    className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                >
                    SIGNIN
                </button>
            </form>
        </div>
    </div>
  )
}