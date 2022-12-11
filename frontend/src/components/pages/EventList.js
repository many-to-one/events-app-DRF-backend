import { useEffect, useState } from "react"
import React from 'react'
import ListItem from "../ListItem"
import AddButton from "../AddButton"
import { useParams } from 'react-router-dom'

function EventList() {

    const [events, setEvents] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getEvents()
    }, [])

    // ###################GET ALL EVENTS###################
    let getEvents = async () => {
        let response = await fetch("/api/events/")
        let data = await response.json()
        setEvents(data)
        console.log(data)
    }

    // ###################UPDATE EVENT BY ID###################
    const deleteEvent = async () => {
        fetch(`/api/events/${id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };

    return (
      <div>
        events:
        <div>
            {events.map((ev, index) => (
                <ListItem key={index} ev={ev} />
            ))}
            <button onClick={deleteEvent} type="submit">Delete</button>
        </div>
        <AddButton />
      </div>
    )
}

export default EventList
