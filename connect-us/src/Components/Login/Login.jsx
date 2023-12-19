import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!userName || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Email validation
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }


    // Clear error message if validation passes
    setErrorMessage('');

  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Welcome Back</div>
        <div className="underline"></div>
      </div>
        <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input"> 
          <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="submit-container">
          <div className='submit' onClick={handleLogin}>Login</div>
          <div className="forgot-password">Forgot Password?<span>Sign Up?</span></div>
        </div>
      </div>
    </div>
  );
}

export default Login;