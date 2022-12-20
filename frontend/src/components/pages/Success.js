// import React from 'react'
import React, { useEffect, useState } from 'react'
import MonthResult from './MonthResults';


const AllMonthResult = () => {
// ################### GET ALL RESULT ###################
    const [result, setResult] = useState([]);

    useEffect(() => {
      getResult()
    },[])

    const getResult = async () => {
        const resp = await fetch('/api/month_results/')
        const data = await resp.json()
        setResult(data)
        console.log(data)
    }

// #####################################################

  return (
    <div>
      <MonthResult />
    </div>
  )
}

export default AllMonthResult
