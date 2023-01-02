import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EventsHistoryItem from '../EventsHistoryItem';
import { MdArrowBackIosNew } from 'react-icons/md'

const EventsHistory = ({userId}) => {

const [eventsHistory, setEventsHistory] = useState([]);

useEffect (() => {
    getEventsHistory()
}, [])

const getEventsHistory = async () => {
    const resp = await fetch(`/api/events_history/${userId}/`)
    const data = await resp.json()
    setEventsHistory(data)
    console.log(userId)
    console.log(eventsHistory)
}

  return (

    <div className='history-cont'>

        {eventsHistory.map((ev, index) =>(
            <EventsHistoryItem key={index} ev={ev}/>
        ))}
        
    </div>
    
  )
}

export default EventsHistory
