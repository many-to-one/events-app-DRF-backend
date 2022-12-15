import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDoneAll, MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


const EventPage = () => {

    const navigate = useNavigate();

    const [event, setEvent] = useState({name: {}});

    const [hours, setHours] = useState({hours: {}});

    const inputRef = useRef();

    const { id } = useParams();

    useEffect(() => {
        getEvent()
    }, [])

    // ################### GET EVENT BY ID ###################
    const getEvent = async () => {
        const response = await fetch(`/api/events/${id}`)
        const data = await response.json()
        setEvent(data)
    };

    // ################### CREATE EVENT ######################
    const createEvent = async () => {
        fetch("/api/event/create/", {
            method: 'POST',
            body:JSON.stringify(event),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };

    // ################### UPDATE EVENT BY ID ###################
    const updateEvent = async () => {

        fetch(`/api/events/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(event)
        })
        console.log(event)
    };

    // ################### BUTTON ONCLICK FUNCTION ###################
    const handleSubmit = () => {

        if(id !== 'new') {
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

        <div className='event-container'>
            <label for="name">
                Event:
            </label>
            <textarea 
                className='text-event'
                onChange={(e) => {setEvent({...event, 'event': e.target.value})}} 
                defaultValue={event.event}>
            </textarea><br></br>
        </div>

        <div className='event-container'>
            <label for="name">
                Hours:
            </label>
            <input 
                className='text-event'
                onChange={(e) => {setHours({...event, 'hours': e.target.value})}} 
                defaultValue={event.hours}>
            </input><br></br>
        </div>

        <div className='event-container'>
            <input 
                className='text-event'
                onChange={(e) => {setHours({...event, 'hours': e.target.value})}} 
                defaultValue={event.minutes}>
            </input> <br></br>
        </div>

        <div className='event-container'>
            <input 
                className='text-event'
                onChange={(e) => {setHours({...event, 'hours': e.target.value})}} 
                defaultValue={event.visits}>
            </input> <br></br>
        </div>

        <div className='event-container'>
            <input 
                className='text-event'
                onChange={(e) => {setHours({...event, 'hours': e.target.value})}} 
                defaultValue={event.publications}>
            </input> <br></br>
        </div>

        <div className='event-container'>
            <input 
                className='text-event'
                onChange={(e) => {setHours({...event, 'hours': e.target.value})}} 
                defaultValue={event.films}>
            </input> <br></br>
        </div>

        <button className="event-btn" onClick={handleSubmit} type="submit">
                <MdDoneAll 
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
