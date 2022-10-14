import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background: 'black'
}

const Navigation = () => {
    return (
        <nav>
            <NavLink
                to="/"
                style={link}
            >Home</NavLink>

            <NavLink
                to="/places"
                style={link}
            >Cities</NavLink>

            <NavLink
                to="/places/new"
                style={link}
            >Add City</NavLink>

            <NavLink
                to="/attractions"
                style={link}
            >Attractions</NavLink>
        </nav>
    )
}

export default Navigation