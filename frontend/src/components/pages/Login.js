import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)


    const submit = async (e) => {
        e.preventDefault();
        
        // #################### LOG IN ################# //
        
        await fetch("/api/users/login/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body:JSON.stringify({
                    email,
                    password,
                })
            });

            setRedirect(true)

        }

        if (redirect) {
            return <Navigate to="/"/>
        }


  return (
    <div className="main-cont" onSubmit={submit}>
        <div className="signup-cont">

            <form className="signup">

            <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button 
                    className='signupBtn'
                >
                    LOG IN
                </button>
                <p>
                    Don't have an account?{" "}
                    {/* <span className='link' onClick={register}> 
                        REGISTER
                    </span> */}
                    <button className='event-btn'>
                        <Link 
                        to={"/SignUp"}
                        style={{textDecoration: 'none'}}
                        >
                            <p>REGISTER</p>
                        </Link>
                    </button> 

                </p>

            </form>

        </div>    
    </div>
  )
}

export default Login
