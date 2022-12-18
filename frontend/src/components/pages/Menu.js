import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { 
    BsFillCalendarCheckFill, 
    BsReverseLayoutTextWindowReverse,
    BsJustifyLeft,
  } from 'react-icons/bs'

function Menu() {
  return (
    <div className='menu-cont'>


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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <p>Test</p>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Menu
