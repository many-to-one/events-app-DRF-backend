import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  BsFillCalendarCheckFill, 
  BsReverseLayoutTextWindowReverse,
  BsJustifyLeft,
  BsXCircle
} from 'react-icons/bs'
import { GiArchiveResearch } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineLogout } from 'react-icons/md'


function Header(props) {

  const [isMobile, setIsMobile] = useState(true);

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
        onClick={() => setIsMobile(true)}
      >

        <div className='nav-links-cont'>

        <div className='header'> 
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
          <Link 
          to={"/result"}
          style={{textDecoration: 'none'}}
          >
            <div 
              className='h-result'
              >
                <FaUserCircle 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>Hi {props.name}</p>
            </div>

          </Link>
          </button>
        </div>

        <div className='header'>
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
            <Link 
            to={"/"}
            style={{textDecoration: 'none'}}
            >
              <div className='h-result'> 
                <AiFillHome 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>Home</p>
              </div>
            </Link>
          </button> 
        </div>
          
        <div className='header'> 
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
          <Link 
          to={"/result"}
          style={{textDecoration: 'none'}}
          >
            <div 
              className='h-result'
              >
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
          </button>
        </div>

        <div className='header'>
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
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
          </button>
        </div>

        <div className='header'>
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
            <Link 
            to={"/events_history"}
            style={{textDecoration: 'none'}}
            >
              <div className='h-result'> 
                <GiArchiveResearch 
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>History</p>
              </div>
            </Link>
          </button> 
        </div>

        </div>

        <div className='header'>
          <button className='event-btn' onClick={() => setIsMobile(!isMobile)}>
            <Link 
            to={"/logout"}
            style={{textDecoration: 'none'}}
            >
              <div className='h-result'> 
                <MdOutlineLogout
                  style={{
                    width: "30px",
                    height: "50px",
                    color: "#F0007F",
                  }}
                /> 
                <p>LOG OUT</p>
              </div>
            </Link>
          </button> 
        </div>

      </nav>


    </header>

   
  )
}

export default Header
