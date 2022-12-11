import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({ev}) {
  return (
    <Link to={`/events/${ev.id}`}>
      <h1>{ev.date}</h1>
    </Link>
  )
}

export default ListItem
