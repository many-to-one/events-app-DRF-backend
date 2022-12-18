import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'


const MonthResult = () => {
// ################### GET ALL RESULT ###################
    const [result, setResult] = useState([]);

    useEffect(() => {
      getResult()
    }, [])

    const getResult = async () => {
        const resp = await fetch('/api/month_results/')
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }
// #####################################################

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

        <h3 className='month'>{result.date}</h3>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Hours:</p>
            </div>
            <div className='right'>
              <p>{result.hours}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Minutes:</p>
            </div>
            <div className='right'>
              <p>{result.minutes}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Visits:</p>
            </div>
            <div className='right'>
              <p>{result.visits}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Publications:</p>
            </div>
            <div className='right'>
              <p>{result.publications}</p>
            </div>  
          </div>
        </div>

        <div className='row-container'>
          <div className='row'>
            <div className='left'>
              <p>Films:</p>
            </div>
            <div className='right'>
              <p>{result.films}</p>
            </div>  
          </div>
        </div>

      </div>

    </div>
  )
}

export default  MonthResult
