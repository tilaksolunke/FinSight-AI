import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../assets/logo.jpg';

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

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

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
      console.log('Login Data:', formData);
      navigate('/dashboard');
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="Login background" />
        </div>

        <div className='bg-black flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-zinc-900 p-8 px-8 border border-red-800'>
                <h2 className='text-4xl text-red-600 font-bold text-center mb-8'>SIGN IN</h2>
                
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Username</label>
                    <input 
                        className={`rounded-lg bg-zinc-800 mt-2 p-2 focus:border-red-600 focus:bg-zinc-900 focus:outline-none text-white ${
                            errors.username ? 'border-2 border-red-500' : 'border border-red-900'
                        }`}
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
                </div>
                
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Password</label>
                    <input 
                        className={`rounded-lg bg-zinc-800 mt-2 p-2 focus:border-red-600 focus:bg-zinc-900 focus:outline-none text-white ${
                            errors.password ? 'border-2 border-red-500' : 'border border-red-900'
                        }`}
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                </div>
                
                <div className='flex justify-between text-gray-300 py-2'>
                    <p className='flex items-center'>
                        <input 
                            className='mr-2 accent-red-600' 
                            type="checkbox" 
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        /> 
                        Remember Me
                    </p>
                    <p className='text-red-500 cursor-pointer hover:text-red-400 hover:underline'>
                        Forgot Password
                    </p>
                </div>
                
                <button 
                    type="submit"
                    className='w-full my-5 py-2 bg-red-600 shadow-lg shadow-red-600/50 hover:bg-red-700 
                             text-white font-semibold rounded-lg transition-colors duration-200'
                >
                    SIGN IN
                </button>
            </form>
        </div>
    </div>
  );
}