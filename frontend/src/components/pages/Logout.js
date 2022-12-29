import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'

const Logout = async () => {

    const [redirect, setRedirect] = useState(false)

        
        // #################### LOG IN ################# //
        
        await fetch("/api/users/logout/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });

            setRedirect(true)

        

        if (redirect) {
            return <Navigate to="/login"/>
        }

  return (
    <div>
      
    </div>
  )
}

export default Logout
