import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  BsFillCalendarCheckFill, 
  BsReverseLayoutTextWindowReverse,
  BsJustifyLeft,
  BsXCircle
} from 'react-icons/bs'

function Header() {

  const [isMobile, setIsMobile] = useState(false);

  return (

    <header className='header-main'>
      
      <div className='menu'>

          <button 
            className='menu-open'
            onClick={() => setIsMobile(!isMobile)}
            > 
              { isMobile? 
              <BsJustifyLeft 
                style={{
                  width: "30px",
                  height: "50px",
                  color: "#F0007F",
                }}
              /> :
              <BsXCircle 
                style={{
                  width: "30px",
                  height: "50px",
                  color: "#F0007F",
                }}
              />
              }
          </button>

      </div>

      <nav 
        className={ isMobile ? "nav-links-mobile" : "nav-links" }
        onClick={() => setIsMobile(false)}
      >

        <div className='nav-links-cont'>
          
        <div className='header'> 
          <Link 
          to={"/result"}
          style={{textDecoration: 'none'}}
          >
            <div className='h-result'> 
                <BsFillCalendarCheckFill 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>Result</p>
            </div>

          </Link>
        </div>

        <div className='header'>
          <Link 
          to={"/by_month"}
          style={{textDecoration: 'none'}}
          >
            <div className='h-result'> 
              <BsReverseLayoutTextWindowReverse 
                style={{
                  width: "30px",
                  height: "50px",
                  color: "#F0007F",
                }}
              /> 
              <p>By month</p>
            </div>

          </Link>
        </div>

        <div className='header'>
          <Link 
          to={"/"}
          style={{textDecoration: 'none'}}
          >
            <div className='h-result'> 
              <BsFillCalendarCheckFill 
                style={{
                  width: "30px",
                  height: "50px",
                  color: "#F0007F",
                }}
              /> 
              <p>Test</p>
            </div>
          </Link>
        </div>

        </div>

      </nav>

      {/* <div>
        <Link>
          <button className='menu-close'>
            <BsXCircle 
              style={{
                width: "30px",
                height: "50px",
                color: "#F0007F",
              }}
            />
            <p>Back</p>
          </button>
        </Link>
      </div> */}

    </header>

   
  )
}

export default Header
