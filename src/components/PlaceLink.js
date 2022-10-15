import React from 'react'
import { NavLink } from 'react-router-dom'

const PlaceLink = ({place, deleteCity}) => {
  return (
    <div>
      <nav>
        <NavLink to={`/places/${place.id}`}>
          {place.city}
        </NavLink> - <button onClick={ () => deleteCity( place.id )}>Delete</button>
      </nav>
      <br/>
    </div>
  )
}

export default PlaceLink
