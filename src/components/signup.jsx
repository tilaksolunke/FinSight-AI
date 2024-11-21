import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signupImg from '../assets/logo.jpg'

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

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

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

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms agreement validation
    if (!formData.termsAgreed) {
      newErrors.termsAgreed = 'You must agree to the Terms and Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the signup data to your backend
      // For this example, we'll just navigate to login
      console.log('Signup Data:', formData);
      
      // Navigate to login page
      navigate('/login');
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={signupImg} alt="Signup background" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Full Name</label>
                    <input 
                        className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${errors.fullName ? 'border-2 border-red-500' : ''}`}
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName}</p>}
                </div>
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input 
                        className={`rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${errors.email ? 'border-2 border-red-500' : ''}`}
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
                
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
                
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Confirm Password</label>
                    <input 
                        className={`p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ${errors.confirmPassword ? 'border-2 border-red-500' : ''}`}
                        type="password" 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
                </div>
                
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'>
                        <input 
                            className='mr-2' 
                            type="checkbox" 
                            name="termsAgreed"
                            checked={formData.termsAgreed}
                            onChange={handleChange}
                        /> 
                        I agree to Terms and Conditions
                    </p>
                    {errors.termsAgreed && <p className='text-red-500 text-sm'>{errors.termsAgreed}</p>}
                </div>
                
                <button 
                    type="submit"
                    className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
                >
                    SIGNUP
                </button>
            </form>
        </div>
    </div>
  )
}