import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const MonthResultItems = ({res}) => {
  return (
    <div className='result'>

      <Link 
        style={{textDecoration: 'none'}} 
        className="event-btn" to={'/'} 
        type="submit"
        >
        <MdArrowBackIosNew 
          style={{
            width: "50px",
            height: "50px",
            color: "#F0007F",
          }}
        />
      </Link>

      <div className='result-container-main'>

        <h3 className='month'>{res.date}</h3>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Hours:</p>
            </div>
            <div className='right'>
              <p>{res.hours}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Minutes:</p>
            </div>
            <div className='right'>
              <p>{res.minutes}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Visits:</p>
            </div>
            <div className='right'>
              <p>{res.visits}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Publications:</p>
            </div>
            <div className='right'>
              <p>{res.publications}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Films:</p>
            </div>
            <div className='right'>
              <p>{res.films}</p>
            </div>  
          </div>
        </div>

      </div>

    </div>
  )
}

export default MonthResultItems
