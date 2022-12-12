import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'


const ListItem = ({ev}) => {

  const navigate = useNavigate();

  const { id } = useParams();

// ################### DELETE EVENT BY ID ###################
const deleteEvent = async () => {

  fetch(`/api/events/${ev.id}/delete/`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
  })
  window.location.reload(false);
  // navigate("/")
};

  return (
    <Link to={`/events/${ev.id}`}>
    <div className='list-item-container'>
      
      <div className='list-item-container-mini'>
        <div className='list-item'>
          {/* <Link to={`/events/${ev.id}`}> */}
            <h1>{ev.date.slice(0, 16)}</h1>
          {/* </Link> */}
        </div>

        <div className='list-item'>
          {/* <Link to={`/events/${ev.id}`}> */}
            <p>{ev.event}</p>
          {/* </Link> */}
        </div>
      </div>
    
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
    </Link>
  )
}

export default ListItem
