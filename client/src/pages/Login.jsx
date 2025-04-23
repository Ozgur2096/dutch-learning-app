import { FaExchangeAlt } from 'react-icons/fa'; // swap icon
import { useState } from 'react';
import { SignupCard } from '../components/SignupCard';
import { LoginCard } from '../components/LoginCard';

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <p>
        {showLogin
          ? "Don't have an account? Sign up now!"
          : 'Already have an account? Login now!'}
      </p>
      <div className='switch-container'>
        {showLogin ? 'Switch to Sign up' : 'Switch to Login'}
        <FaExchangeAlt
          className='switch-icon'
          onClick={() => setShowLogin(!showLogin)}
          title='Switch Form'
        />{' '}
      </div>
      {showLogin ? <LoginCard /> : <SignupCard />}
    </div>
  );
};
