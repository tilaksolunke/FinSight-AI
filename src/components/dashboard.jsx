import React, { useState } from 'react'
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

  // Sample stocks data
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

  // Sample stock news
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

  // Chatbot state
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
    <div className='min-h-screen bg-gray-900 p-6'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Portfolio Overview */}
        <div className='bg-gray-800 rounded-lg p-6 col-span-2'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl text-white font-bold'>Portfolio Performance</h2>
            <button className='text-teal-400 hover:text-teal-300'>
              <RefreshCw size={20} />
            </button>
          </div>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#333', 
                  border: 'none', 
                  color: 'white' 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={3} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stocks Watchlist */}
        <div className='bg-gray-800 rounded-lg p-6'>
          <h2 className='text-2xl text-white font-bold mb-4'>Watchlist</h2>
          {stocks.map((stock) => (
            <div 
              key={stock.symbol} 
              className='flex justify-between items-center mb-3 p-3 bg-gray-700 rounded-lg'
            >
              <div>
                <p className='text-white font-semibold'>{stock.symbol}</p>
                <p className='text-gray-400 text-sm'>{stock.name}</p>
              </div>
              <div className='text-right'>
                <p className='text-white font-semibold'>${stock.price.toFixed(2)}</p>
                <p className={`text-sm ${stock.status === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                  {stock.status === 'up' ? <TrendingUp size={14} className='inline ml-1' /> : <TrendingDown size={14} className='inline ml-1' />}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className='bg-gray-800 rounded-lg p-6 col-span-2'>
          <h2 className='text-2xl text-white font-bold mb-4'>Latest Financial News</h2>
          {news.map((item) => (
            <div 
              key={item.id} 
              className='bg-gray-700 rounded-lg p-4 mb-3'
            >
              <h3 className='text-white font-semibold'>{item.title}</h3>
              <div className='flex justify-between text-gray-400 text-sm mt-2'>
                <span>{item.source}</span>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Chatbot */}
        <div className='bg-gray-800 rounded-lg p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-2xl text-white font-bold'>FinSight AI Assistant</h2>
            <Bell size={20} className='text-teal-400' />
          </div>
          <div className='h-64 overflow-y-auto mb-4 pr-2'>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 p-3 rounded-lg max-w-[80%] ${
                  message.type === 'bot' 
                    ? 'bg-gray-700 text-white self-start' 
                    : 'bg-teal-600 text-white self-end ml-auto'
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
              className='flex-grow bg-gray-700 text-white p-2 rounded-l-lg focus:outline-none'
            />
            <button 
              onClick={handleSendMessage}
              className='bg-teal-500 text-white p-2 rounded-r-lg'
            >
              <MessageCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}