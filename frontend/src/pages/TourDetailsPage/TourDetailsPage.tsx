import React from 'react'
import { useLocation } from 'react-router-dom'

const TourDetailsPage = () => {
    const location = useLocation()
    const {id} = location.state ||{}
  return (
    <div>{id}</div>
  )
}

export default TourDetailsPage