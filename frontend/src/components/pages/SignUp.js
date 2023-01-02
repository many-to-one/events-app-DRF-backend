import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom'

const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        
        // #################### REGISTRATION ################# //
        
        await fetch("/api/users/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email,
                    username,
                    password,
                })
            });

            setRedirect(true)

        }

        if (redirect) {
            return <Navigate to="/login"/>
        }



  return (
    <div className="main-cont" onSubmit={submit}>
        <div className="signup-cont">

            <form className="signup">
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder="Password"
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button className='signupBtn'>
                    SIGN UP
                </button>

                <div className="login-cont">
                    <p>Already have an account?</p>
                    <Link 
                      to={"/login"}
                      style={{textDecoration: 'none'}}
                    >
                        <p id="login">Log in</p>
                    </Link>
                </div>
    
            </form>

        </div>
    </div>
  )
}

export default SignUp
