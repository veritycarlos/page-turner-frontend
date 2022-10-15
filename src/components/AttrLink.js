import React from 'react'
import { NavLink } from 'react-router-dom'

const AttrLink = ({attraction, place, deleteAttraction }) => {

  return (
    <div>
        <nav>
            <NavLink to={`/attractions/${attraction.id}`}>
                {attraction.name}
            </NavLink>  {place.city}, TX  - <button onClick={ () => deleteAttraction( attraction.id )}>Delete</button>
        </nav>
        <br/>
    </div>
    
  )
}

export default AttrLink