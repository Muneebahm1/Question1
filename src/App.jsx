import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="a">
      <h2 className='color1 sign font'>Sign in</h2>
      <p className='color2 font para'>Enter your email and password to sign in!</p>
      <div className='or'>or</div>
      <div>
        <form action="">
          Email<span class="required">*</span><br/>
          <input type="text"  placeholder='mail@simmmple.com' className='inp'/>
          Password<span class="required">*</span><br/>
          <input type="password"  placeholder='Min. 8 characters' className='inp' id="passwordInput"/>
          <div className='mdiv'>
            <div><input type="checkbox" className='check' /> Keep me Login</div>
            <div>Forgot password?</div>
          </div>
          <input type="submit" className='sbtn'/>
          <span>Not registered yet?</span>
          <span className='color1'> Create an Account</span>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
