import React from 'react'
import MonthResultItems from '../MonthResultItems'
import { useEffect, useState } from "react"

const MonthResults = () => {

  // ################### GET ALL RESULT ###################
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult()
  }, [])

  const getResult = async () => {
      const resp = await fetch('/api/results/')
      const data = await resp.json()
      setResult(data)
      console.log(data)
  }
// #####################################################
  
  return (
    <p className='month'>Hello</p>

    // <div className="event-list">
    //   {events.map((ev, index) => (
    //     <MonthResultItems key={index} ev={ev} />
    //   ))}
    // </div>
  )
}

export default MonthResults
