// import Home from './components/home';
// import Login from './components/Login'
// import Signup from './components/signup';


// function App() {
//   return (
//     <div>
//       <Home/>
//       <Signup/>
//       <Login />

//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login'
import Signup from './components/signup';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;