import { useEffect, useState } from "react"
import React from 'react'
import ListItem from "../ListItem"
import AddButton from "../AddButton"


function EventList({hr}) {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    // ################### GET ALL EVENTS ###################
    const getEvents = async () => {
        const response = await fetch("/api/events/")
        const data = await response.json()
        setEvents(data)
    };

    return (

      <div className="event-list">
        <div>
            {events.map((ev, index) => (
                <ListItem key={index} ev={ev} />
            ))}
        </div>
        <AddButton />
      </div>
    )
}

export default EventList
