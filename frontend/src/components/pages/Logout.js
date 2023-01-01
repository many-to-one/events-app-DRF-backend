import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'

function Logout () {
        
    // #################### LOG OUT ################# //
    
    fetch("/api/users/logout/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        // return <Navigate to="/login"/>
        return (
            <div>
                <Navigate to="/login"/>
            </div>
        )
  }

  export default Logout
