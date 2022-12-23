// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'



const EventsHistoryItem = ({ev}) => {


  return (
    <div className='history-cont'>
        <div className='history-item'>
            <h3>{ev.date.slice(0, 10)}</h3>
            <p>{ev.event}</p>
            <p>Hours: {ev.hours}</p>
            <p>Miinutes: {ev.minutes}</p>
            <p>Visits: {ev.visits}</p>
            <p>Publications: {ev.publications}</p>
            <p>Films: {ev.films}</p>
        </div>
    </div>
  )
}

export default EventsHistoryItem
