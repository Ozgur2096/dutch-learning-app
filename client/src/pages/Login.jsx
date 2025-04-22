import { useState } from 'react';
import { SignupCard } from '../components/SignupCard';
import { LoginCard } from '../components/LoginCard';

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? <LoginCard /> : <SignupCard />}
      <p>
        {showLogin
          ? "Don't have an account? Sign up now!"
          : 'Already have an account? Login now!'}
      </p>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Switch to Sign up' : 'Switch to Login'}
      </button>
    </div>
  );
};
