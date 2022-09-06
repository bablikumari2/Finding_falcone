import React, {useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider'
import "../css/TimeTaken.css"

function TimeTaken() {
    const { Total_time} = useContext(AuthContext)
    
  return (
      <>
      <div className='Time'>
      
      <button className='total'>TimeTaken : {Total_time}</button>
      </div>
      
      </>
      
  )
}

export default TimeTaken