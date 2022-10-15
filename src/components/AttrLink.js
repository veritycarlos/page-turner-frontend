import React from 'react'
import { NavLink } from 'react-router-dom'

const AttrLink = ({attraction, place}) => {
  return (
    <div>
        <nav>
            <NavLink to={`/attractions/${attraction.id}`}>
                {attraction.name}
            </NavLink>  {place.city}, TX 
        </nav>
        <br/>
    </div>
    
  )
}

export default AttrLink