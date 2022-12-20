import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import MonthResultItems from '../MonthResultItems';


const MonthResult = () => {
// ################### GET ALL RESULT ###################
    const [result, setResult] = useState([]);

    useEffect(() => {
      getResult()
    }, [])

    const getResult = async () => {
        const resp = await fetch('/api/get_month_results/')
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }
// #####################################################

return(
  <div>

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

    {result.map((res, index) => (
      <MonthResultItems key={index} res={res} />
    ))}
  </div>
)
}

export default  MonthResult
