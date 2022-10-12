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
        <div>
            <NavLink
                to="/"
                style={link}
            >Home</NavLink>

            <NavLink
            to="/readers"
            style={link}
            >Readers</NavLink>
        </div>
    )
}

export default Navigation
