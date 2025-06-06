import React from 'react';
import './App.css';
import { Login } from './pages/LogIn';
import { Dashboard } from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';

function App() {
  console.log(import.meta.env.VITE_TEST);
  return (
    <>
      <AppHeader />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
