import React from 'react'

const MonthResultItems = ({ev}) => {
  return (
    <div className='list-item-container'>
      
      <div className='list-item-container-mini'>
        <div className='list-item'>
            <h1>{ev.date.slice(0, 10)}</h1>
        </div>

        <div className='list-item'>
            <p>{ev.hours}</p>
        </div>
      </div>

    </div>
  )
}

export default MonthResultItems
