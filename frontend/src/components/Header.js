import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link 
        to={"/result"}
        style={{textDecoration: 'none'}}
        >
        <div className='h-result'>
            <p>RESULT</p>  
        </div>
      </Link>
      <h1>Second Link</h1>
      <h1>Third Link</h1>
    </div>
  )
}

export default Header
