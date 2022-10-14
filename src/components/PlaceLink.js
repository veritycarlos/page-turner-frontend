import React from 'react'
import { NavLink } from 'react-router-dom'

const PlaceLink = ({place}) => {
  return (
    <div>
      <NavLink to={`/places/${place.id}`}>
        <h3>{place.city}</h3>
      </NavLink>
    </div>
  )
}

export default PlaceLink
