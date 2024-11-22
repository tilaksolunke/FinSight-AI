import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImg from '../assets/logo.jpg';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.termsAgreed) {
      newErrors.termsAgreed = 'You must agree to the Terms and Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Signup Data:', formData);
      navigate('/login');
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={signupImg} alt="Signup background" />
        </div>

        <div className='bg-black flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-zinc-900 p-8 px-8 border border-red-800'>
                <h2 className='text-4xl text-red-600 font-bold text-center mb-8'>SIGN UP</h2>
                
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Full Name</label>
                    <input 
                        className={`rounded-lg bg-zinc-800 mt-2 p-2 focus:border-red-600 focus:bg-zinc-900 focus:outline-none text-white ${
                            errors.fullName ? 'border-2 border-red-500' : 'border border-red-900'
                        }`}
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName}</p>}
                </div>
                
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Email</label>
                    <input 
                        className={`rounded-lg bg-zinc-800 mt-2 p-2 focus:border-red-600 focus:bg-zinc-900 focus:outline-none text-white ${
                            errors.email ? 'border-2 border-red-500' : 'border border-red-900'
                        }`}
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
                
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
                
                <div className='flex flex-col text-gray-300 py-2'>
                    <label>Confirm Password</label>
                    <input 
                        className={`rounded-lg bg-zinc-800 mt-2 p-2 focus:border-red-600 focus:bg-zinc-900 focus:outline-none text-white ${
                            errors.confirmPassword ? 'border-2 border-red-500' : 'border border-red-900'
                        }`}
                        type="password" 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
                </div>
                
                <div className='flex items-center text-gray-300 py-2'>
                    <input 
                        className='mr-2 accent-red-600' 
                        type="checkbox" 
                        name="termsAgreed"
                        checked={formData.termsAgreed}
                        onChange={handleChange}
                    /> 
                    <span>I agree to Terms and Conditions</span>
                    {errors.termsAgreed && <p className='text-red-500 text-sm ml-2'>({errors.termsAgreed})</p>}
                </div>
                
                <button 
                    type="submit"
                    className='w-full my-5 py-2 bg-red-600 shadow-lg shadow-red-600/50 hover:bg-red-700 
                             text-white font-semibold rounded-lg transition-colors duration-200'
                >
                    SIGN UP
                </button>
            </form>
        </div>
    </div>
  );
}