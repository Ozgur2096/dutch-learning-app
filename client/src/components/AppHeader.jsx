import React from 'react';
import { FaBook } from 'react-icons/fa';
import '../styles/AppHeader.css';
export const AppHeader = () => {
  return (
    <header className='app-header'>
      <div className='logo-container'>
        <FaBook className='logo-icon' />
        <span className='app-title'>Dutch Learning</span>
      </div>
    </header>
  );
};
