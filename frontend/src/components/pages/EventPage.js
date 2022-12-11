import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EventPage = (history) => {

    const [event, setEvent] = useState({name: {}});

    const { id } = useParams();

    useEffect(() => {
        getEvent()
    }, [])

    // ###################GET EVENT BY ID###################
    const getEvent = async () => {
        const response = await fetch(`/api/events/${id}`)
        const data = await response.json()
        setEvent(data)
        console.log(data)
    }

    // ###################UPDATE EVENT BY ID###################
    const updateEvent = async () => {
        fetch(`/api/events/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(event)
        })
    };

    // ###################BUTTON ONCLICK FUNCTION###################
    const handleSubmit = () => {
        updateEvent()
        history.push('/')
    }

  return (
    <div className='event'>
        <p>{event.date}</p>
        <textarea 
            onChange={(e) => {setEvent({...event, 'event': e.target.value})}} 
            defaultValue={event.event}>
        </textarea>
        <button onClick={handleSubmit} type="submit">Save</button>
    </div>
  )
}

export default EventPage
