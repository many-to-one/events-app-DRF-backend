import React, { useEffect, useState } from "react"
import ListItem from "../ListItem"
import AddButton from "../AddButton"
import { RiDeleteBack2Fill } from 'react-icons/ri'

const EventList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    const [userId, setuserId] = useState('')

    useEffect(() => {
      getUser()
    }, [])
 
    // ################### GET USER ###################
    const getUser = async () => {
      const response = await fetch("/api/users/user/")
      const data = await response.json()
      setuserId(data.id)
      console.log(userId)
    };

    // ################### GET USERS EVENTS ###################
    const getEvents = async () => {
        const response = await fetch(`/api/events/${userId}/`)
        const data = await response.json()
        setEvents(data)
        console.log(data)
    };

    // ################### DELETE ALL EVENTS ###################

    const deleteAll = async () => {

        fetch("/api/event/delete-all/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        window.location.reload(false);
      };

    return (

      <div className="event-list">

        <div className="event-list-cont">

            <div className="y">
                {events.map((ev, index) => (
                    <ListItem key={index} ev={ev} />
                ))}
            </div>

            <div className="btn-container">

            <button className="event-btn" onClick={deleteAll} type="submit">
                <RiDeleteBack2Fill
                    style={{
                        width: "50px",
                        height: "50px",
                        color: "#F0007F",
                    }}
                />
            </button>

            <AddButton />

        </div>

        </div>
        
      </div>  

      
    )
}

export default EventList
