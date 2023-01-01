import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'


const Result = ({userId}) => {
// ################### GET ALL RESULT ###################
    const [result, setResult] = useState([]);

    useEffect(() => {
      getResult()
    },[])

    const getResult = async () => {
        const resp = await fetch(`/api/results/${userId}/`)
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }

// #####################################################

  return (
    <div className='result'>

      <div className='res-btn-cont'>

        <Link 
          style={{textDecoration: 'none'}} 
          className="event-btn" to={'/'} 
          id="back"
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

        <Link
          to={"/success"}
          style={{textDecoration: 'none'}}
        >
        <button className="event-btn" 
          id='archivate' 
          type="submit">
          <AiFillSave
            style={{
              width: "50px",
              height: "50px",
              color: "#F0007F",
            }}
          /> 
        </button>
      </Link>

      </div>

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

export default  Result
