import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignUp.css';

export const LoginCard = () => {
  const [user, setUser] = useState({ username: '', password: '', email: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      document.cookie = `token=${data.token}; path=/`;
      document.cookie = `userId=${data.userId}; path=/`;
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='login-card'>
      <h1>Login</h1>
      <form className='auth-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
// export default LoginCard;
