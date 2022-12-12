import { useEffect, useState } from "react"
import React from 'react'
import ListItem from "../ListItem"
import AddButton from "../AddButton"
import { Link, useParams } from 'react-router-dom'


function EventList() {

    const [events, setEvents] = useState([])

    const { id } = useParams();

    useEffect(() => {
        getEvents()
    }, [])

    // ################### GET ALL EVENTS ###################
    const getEvents = async () => {
        const response = await fetch("/api/events/")
        const data = await response.json()
        setEvents(data)
        console.log(data)
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
