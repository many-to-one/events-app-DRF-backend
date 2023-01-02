// import React from 'react'
import React, { useEffect, useState } from 'react'
import MonthResults from './MonthResults'


const AllMonthResult = ({userId}) => {
// ################### SAVE A RESULT FOR THE CURRENT MONTH ###################

  fetch(`/api/month/create/${userId}/`)
  console.log(userId)

  return (
    <div>
      <MonthResults userId={userId}/>
    </div>
  )
}

export default AllMonthResult
