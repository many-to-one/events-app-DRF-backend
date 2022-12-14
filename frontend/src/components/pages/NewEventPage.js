// import React from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDoneAll, MdArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

function NewEventPage() {

    const [event, setEvent] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [visits, setVisits] = useState('');
    const [publications, setPublications] = useState('');
    const [films, setFilms] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

// ################### CREATE EVENT ######################
const createEvent = async () => {
    const data = {event, hours, minutes, visits, publications, films}
    console.log(data)
    fetch("/api/event/create/", {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }, 
    })
};

// ################### UPDATE EVENT BY ID ###################
const updateEvent = async () => {
    const data = {event, hours, minutes, visits, publications, films}
    console.log(data)
    fetch(`/api/events/${id}/update/`, {
        method: 'PUT',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log(data)
};

// ################### BUTTON ONCLICK FUNCTION ###################
const handleSubmit = () => {

    const data = {event, hours, minutes, visits, publications, films}
    if(id !== 'new') {
        updateEvent()
    } else if(id === 'new' && data !== null) {
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

            <p>{event.data}</p>
            <div className='event-container'>
                <input 
                    placeholder='Event' 
                    className='text-event' 
                    type="text" name="event" 
                    value={event} 
                    onChange={(e) => {setEvent(e.target.value)}} 
                    defaultValue={event} 
                /><br></br>
                <input 
                    placeholder='Hours'
                    className='text-event'
                    type="number" 
                    name="hours" 
                    value={hours} 
                    onChange={(e) => {setHours(e.target.value)}}  
                    defaultValue={hours}
                /><br></br>
                <input 
                    placeholder='Minutes'
                    className='text-event'
                    type="number" 
                    name="minutes" 
                    value={minutes} 
                    onChange={(e) => {setMinutes(e.target.value)}}  
                    defaultValue={minutes}
                /><br></br>
                <input 
                    placeholder='Visits'
                    className='text-event'
                    type="number" 
                    name="visits" 
                    value={visits} 
                    onChange={(e) => {setVisits(e.target.value)}}  
                    defaultValue={visits}
                /><br></br>
                <input 
                    placeholder='Publications'
                    className='text-event'
                    type="number" 
                    name="publications" 
                    value={publications} 
                    onChange={(e) => {setPublications(e.target.value)}}  
                    defaultValue={publications}
                /><br></br>
                <input 
                    placeholder='Films'
                    className='text-event'
                    type="number" 
                    name="films" 
                    value={films} 
                    onChange={(e) => {setFilms(e.target.value)}}  
                    defaultValue={films}
                /><br></br>
            </div>
            <button className="event-btn-submit" onClick={handleSubmit} type="submit">
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


export default NewEventPage
