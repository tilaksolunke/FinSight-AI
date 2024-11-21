import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-gray-800 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo/Brand */}
          <div className='text-white text-2xl font-bold flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 mr-2' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            FinSight AI
          </div>

          {/* Navigation Buttons */}
          <div className='flex space-x-4'>
            <Link 
              to='/login' 
              className='bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out'
            >
              Login
            </Link>
            <Link 
              to='/signup' 
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
          Intelligent Financial Investment Advisory
        </h1>
        <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
          Leverage AI-powered insights to make smarter investment decisions. 
          FinSight AI analyzes market trends, assesses risk, and provides 
          personalized investment recommendations.
        </p>
        <div className='space-x-4'>
          <Link 
            to='https://www.investopedia.com/investing-101-4689754' 
            target="_blank"
            className='bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out'
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Rest of the code remains the same */}
      ...
    </div>
  )
}