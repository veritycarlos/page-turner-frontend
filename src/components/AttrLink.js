import React from 'react'
import { NavLink } from 'react-router-dom'

const AttrLink = ({attraction}) => {
  return (
    <div>
    <br/>
      <NavLink to={`/attractions/${attraction.id}`}>
        {attraction.name}
      </NavLink> {attraction.place.city}
    </div>
  )
}

export default AttrLink