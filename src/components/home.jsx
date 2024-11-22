import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
 return (
   <div className='min-h-screen bg-neutral-900'>
     {/* Navbar */}
     <nav className='bg-black p-4'>
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
             className='bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out'
           >
             Login
           </Link>
           <Link 
             to='/signup' 
             className='bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out border border-red-600'
           >
             Sign Up
           </Link>
         </div>
       </div>
     </nav>

     {/* Hero Section */}
     <div className='container mx-auto px-4 py-16 text-center'>
       <h1 className='text-5xl font-bold text-white mb-6'>
         FinSight AI
       </h1>
       <p className='text-xl text-neutral-300 mb-8 max-w-2xl mx-auto'>
         Your AI-Powered Financial Companion for Smart Investment Decisions
       </p>
     </div>

     {/* Services Section */}
     <div className='bg-black py-16'>
       <div className='container mx-auto px-4'>
         <h2 className='text-3xl font-bold text-center mb-12 text-white'>
           Our Services
         </h2>
         <div className='grid md:grid-cols-3 gap-8'>
           {/* RAG */}
           <div className='bg-neutral-800 p-6 rounded-lg text-center hover:shadow-lg transition duration-300 border border-red-600/20'>
             <div className='text-4xl text-red-500 mb-4'>🤖</div>
             <h3 className='text-xl font-semibold mb-4 text-white'>AI Chat Assistant</h3>
             <p className='text-neutral-300'>
               Advanced RAG-powered chatbot providing real-time financial insights, market analysis, and personalized investment guidance
             </p>
           </div>

           {/* Stock Prediction */}
           <div className='bg-neutral-800 p-6 rounded-lg text-center hover:shadow-lg transition duration-300 border border-red-600/20'>
             <div className='text-4xl text-red-500 mb-4'>📈</div>
             <h3 className='text-xl font-semibold mb-4 text-white'>Stock Price Prediction</h3>
             <p className='text-neutral-300'>
               Advanced ML models for stock price forecasting using technical analysis, market sentiment, and historical data
             </p>
           </div>

           {/* Market Data */}
           <div className='bg-neutral-800 p-6 rounded-lg text-center hover:shadow-lg transition duration-300 border border-red-600/20'>
             <div className='text-4xl text-red-500 mb-4'>📊</div>
             <h3 className='text-xl font-semibold mb-4 text-white'>Real-Time Market Data</h3>
             <p className='text-neutral-300'>
               Comprehensive stock market data, including live prices, financial statements, news sentiment, and technical indicators
             </p>
           </div>
         </div>
       </div>
     </div>

     {/* Our Findings Section */}
     <div className='bg-neutral-900 py-16'>
       <div className='container mx-auto px-4'>
         <h2 className='text-3xl font-bold text-center mb-12 text-white'>
           Our Findings
         </h2>
         <div className='max-w-4xl mx-auto'>
           <div className='bg-black p-8 rounded-lg shadow-sm mb-8 border border-red-600/20'>
             <h3 className='text-2xl font-semibold mb-4 text-white'>Stock Price Prediction: A Reality Check</h3>
             <p className='text-neutral-300 mb-6'>
               Through extensive research and testing, we've found that precise stock price prediction remains challenging even with advanced AI models. Here's what we've learned:
             </p>
             <div className='grid md:grid-cols-2 gap-8 mb-8'>
               <div>
                 <h4 className='font-semibold text-red-500 mb-2'>Model Performance</h4>
                 <p className='text-neutral-300'>Our models show ~60-65% directional accuracy in stable market conditions, but accuracy drops significantly during high volatility periods.</p>
               </div>
               <div>
                 <h4 className='font-semibold text-red-500 mb-2'>Market Complexity</h4>
                 <p className='text-neutral-300'>Markets are influenced by countless factors including global events, sentiment, and unexpected news that AI cannot reliably predict.</p>
               </div>
             </div>
             
             {/* Evidence Section */}
             <div className='space-y-6'>
               <h4 className='font-semibold text-lg text-white mb-4'>Supporting Evidence</h4>
               <div className='grid md:grid-cols-2 gap-4'>
                 <div className='bg-neutral-800 p-4 rounded-lg'>
                   <img 
                     src="/api/placeholder/600/400" 
                     alt="Model prediction vs actual prices" 
                     className='w-full rounded-lg mb-2'
                   />
                   <p className='text-sm text-neutral-300'>Model predictions (blue) vs actual prices (red) showing deviation during market volatility</p>
                 </div>
                 <div className='bg-neutral-800 p-4 rounded-lg'>
                   <img 
                     src="/api/placeholder/600/400" 
                     alt="Accuracy analysis chart" 
                     className='w-full rounded-lg mb-2'
                   />
                   <p className='text-sm text-neutral-300'>Accuracy analysis across different market conditions and time periods</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/* Footer */}
     <footer className='bg-black text-white py-8'>
       <div className='container mx-auto text-center'>
         <p>&copy; 2024 FinSight AI. All rights reserved.</p>
         <div className='mt-4 space-x-4'>
           <Link to='/privacy' className='hover:text-red-400'>Privacy Policy</Link>
           <Link to='/terms' className='hover:text-red-400'>Terms of Service</Link>
           <Link to='/contact' className='hover:text-red-400'>Contact Us</Link>
         </div>
       </div>
     </footer>
   </div>
 )
}