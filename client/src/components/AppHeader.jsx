import React from 'react';
import { FaBook } from 'react-icons/fa';
import '../styles/AppHeader.css';
export const AppHeader = ({ title }) => {
  return (
    <header className='app-header'>
      <div className='logo-container'>
        <FaBook className='logo-icon' />
        <span className='app-title'>Dutch Learning</span>
      </div>
      <div className='app-header-title'>{title}</div>
      <div className='app-header-user-info'>
        <img
          src='https://via.placeholder.com/40'
          alt='User Avatar'
          className='user-avatar'
        />
      </div>
    </header>
  );
};
