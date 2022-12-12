import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDelete, MdDoneAll, MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


const EventPage = (history) => {

    const navigate = useNavigate();

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
    };

    // ###################CREATE EVENT BY ID###################
    const createEvent = async () => {
        fetch("/api/event/create/", {
            method: 'POST',
            body:JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };

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

    // ###################DELETE EVENT BY ID###################
    const deleteEvent = async () => {
        fetch(`/api/events/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        navigate("/")
    };

    // ###################BUTTON ONCLICK FUNCTION###################
    const handleSubmit = () => {
        if(id !== 'new' && !event.event) {
            deleteEvent()
        } else if(id !== 'new') {
            updateEvent()
        } else if(id === 'new' && event !== null) {
            createEvent()
        };
        navigate("/")
    }

  return (
    <div className='event'>
        <Link className="event-btn" to={'/'} type="submit">
            <MdArrowBackIosNew 
                style={{
                        width: "50px",
                        height: "50px",
                        color: "#F0007F",
                    }}
            />
        </Link>
        <p>{event.date}</p>
        <textarea 
            onChange={(e) => {setEvent({...event, 'event': e.target.value})}} 
            defaultValue={event.event}>
        </textarea>
        
        <button className="event-btn" onClick={handleSubmit} type="submit">
            <MdDoneAll 
                style={{
                        width: "50px",
                        height: "50px",
                        color: "#F0007F",
                    }}
            />
        </button> 
        <button className="event-btn" onClick={deleteEvent} type="submit">
                <MdDelete 
                    style={{
                        width: "50px",
                        height: "50px",
                        color: "#F0007F",
                    }}
                />
            </button>
        
    </div>
  )
}

export default EventPage
