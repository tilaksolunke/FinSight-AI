import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { 
  TrendingUp, 
  TrendingDown, 
  Bell, 
  MessageCircle, 
  RefreshCw 
} from 'lucide-react'

export default function Dashboard() {
  const [portfolioData, setPortfolioData] = useState([
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 48000 },
    { name: 'Mar', value: 52000 },
    { name: 'Apr', value: 50000 },
    { name: 'May', value: 55000 },
  ]);

  const [stocks, setStocks] = useState([
    { 
      symbol: 'AAPL', 
      name: 'Apple Inc.', 
      price: 175.45, 
      change: 2.3, 
      changePercent: 1.32,
      status: 'up'
    },
    { 
      symbol: 'GOOGL', 
      name: 'Alphabet Inc.', 
      price: 126.78, 
      change: -1.5, 
      changePercent: -1.18,
      status: 'down'
    },
    { 
      symbol: 'MSFT', 
      name: 'Microsoft Corporation', 
      price: 335.22, 
      change: 1.8, 
      changePercent: 0.54,
      status: 'up'
    }
  ]);

  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Tech Giants Announce Quarterly Earnings',
      source: 'Financial Times',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Market Trends Show Positive Investment Signals',
      source: 'Bloomberg',
      time: '4 hours ago'
    },
    {
      id: 3,
      title: 'New AI Innovations Disrupting Financial Sector',
      source: 'Wall Street Journal',
      time: '6 hours ago'
    }
  ]);

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hello! I\'m FinSight AI Assistant. How can I help you with your investments today?', 
      type: 'bot' 
    }
  ]);

  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setMessages([
        ...messages, 
        { id: messages.length + 1, text: chatInput, type: 'user' },
        { 
          id: messages.length + 2, 
          text: 'I\'m processing your request. How can I provide more detailed investment insights?', 
          type: 'bot' 
        }
      ]);
      setChatInput('');
    }
  };

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
              to='/' 
              className='bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out border border-red-600'
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className='p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Portfolio Overview */}
          <div className='bg-black rounded-lg p-6 col-span-2 border border-red-600/20'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-2xl text-white font-bold'>Portfolio Performance</h2>
              <button className='text-red-500 hover:text-red-400'>
                <RefreshCw size={20} />
              </button>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={portfolioData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #dc2626', 
                    color: 'white' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#dc2626" 
                  strokeWidth={3} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stocks Watchlist */}
          <div className='bg-black rounded-lg p-6 border border-red-600/20'>
            <h2 className='text-2xl text-white font-bold mb-4'>Watchlist</h2>
            {stocks.map((stock) => (
              <div 
                key={stock.symbol} 
                className='flex justify-between items-center mb-3 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors'
              >
                <div>
                  <p className='text-white font-semibold'>{stock.symbol}</p>
                  <p className='text-neutral-400 text-sm'>{stock.name}</p>
                </div>
                <div className='text-right'>
                  <p className='text-white font-semibold'>${stock.price.toFixed(2)}</p>
                  <p className={`text-sm flex items-center justify-end ${stock.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    {stock.status === 'up' ? <TrendingUp size={14} className='ml-1' /> : <TrendingDown size={14} className='ml-1' />}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* News Section */}
          <div className='bg-black rounded-lg p-6 col-span-2 border border-red-600/20'>
            <h2 className='text-2xl text-white font-bold mb-4'>Latest Financial News</h2>
            {news.map((item) => (
              <div 
                key={item.id} 
                className='bg-neutral-800 rounded-lg p-4 mb-3 hover:bg-neutral-700 transition-colors'
              >
                <h3 className='text-white font-semibold'>{item.title}</h3>
                <div className='flex justify-between text-neutral-400 text-sm mt-2'>
                  <span>{item.source}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Chatbot */}
          <div className='bg-black rounded-lg p-6 border border-red-600/20'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-2xl text-white font-bold'>FinSight AI Assistant</h2>
              <Bell size={20} className='text-red-500' />
            </div>
            <div className='h-64 overflow-y-auto mb-4 pr-2'>
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                    message.type === 'bot' 
                      ? 'bg-neutral-800 text-white self-start' 
                      : 'bg-red-600 text-white self-end ml-auto'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className='flex'>
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about your investments..."
                className='flex-grow bg-neutral-800 text-white p-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-red-500'
              />
              <button 
                onClick={handleSendMessage}
                className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-r-lg transition-colors'
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}