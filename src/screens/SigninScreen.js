import React from 'react';
import './SigninScreen.css';

function SigninScreen() {
  return (
    <div className='signinScreen'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signinScreen__gray">New to Netflix? </span> 
          <span className="signinScreen__link">Sign up Now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SigninScreen