import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import AttrLink from './AttrLink'

const PlaceDetails = () => {
    const [place, setPlace] = useState({
        attractions: []
    })
    const [places, setPlaces] = useState([])

    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch(`http://localhost:9292/places/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlace(data)
        })
    }, [])

    const deleteCity = e => {
        fetch(`http://localhost:9292/places/${ params.id }`, {method: "DELETE"})
        .then(res => res.json())
        .then (data => { 
            removeCity(params.id)
            navigate(`/places`)
        })       
    }

    const removeCity = id => {
        setPlaces(places.filter(c => c.id != id))
    }

    const attractions = place.attractions.map(a => <AttrLink key={a.id} attraction={a} place={place}/>)

    return (
        <div>
            <br/>
            <h1>{place.city}</h1>
            <h2>Attractions:</h2>
            <h3>
                {attractions}
                <p><NavLink to={`/places/${place.id}/edit`}>Edit Location</NavLink></p>
                <p><NavLink to={`/places/${place.id}/attractions/new`}>Add New Attraction</NavLink></p>
                <button onClick={ () => deleteCity( place.id )}>Delete</button>
            </h3>
        </div>
    )
}

export default PlaceDetails