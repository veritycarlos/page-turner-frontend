import React from 'react'
import { NavLink } from 'react-router-dom'

const PlaceLink = ({place}) => {
  return (
    <div>
      <nav>
        <NavLink to={`/places/${place.id}`}>
          {place.city}
        </NavLink> 
      </nav>
      <br/>
    </div>
  )
}

export default PlaceLink