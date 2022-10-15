import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const AttractionDetails = () => {
    const [attraction, setAttraction] = useState({
        place:[]
    })
    
    const params = useParams();
  
    useEffect(() => {
        fetch(`http://localhost:9292/attractions/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAttraction(data)
        })
    }, [])

    return (
        <div>
            <br/>
            <h1>{attraction.name}</h1>
            <img src={attraction.photo} alt="icon" />
            <p>{attraction.address}</p>
            <p>City: <NavLink to={`/places/${attraction.place.id}`}>{attraction.place.city}</NavLink> </p>
        </div>
    )
}

export default AttractionDetails
