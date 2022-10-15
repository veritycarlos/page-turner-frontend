import React, { useState, useEffect } from 'react'
import PlaceLink  from '../components/PlaceLink'

const Places = () => {
    const [places, setPlaces] = useState([])
    // const [placeFormFlag, setPlaceFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/places')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPlaces(data)
            })
    }, [])

    const deleteCity = async id => {
        const resp = await fetch(`http://localhost:9292/places/${ id }`, {method: "DELETE"})
        const data = await resp.json();

        removeCity(id)
    }

    const removeCity = id => {
        setPlaces(places.filter(c => c.id != id))
    }

    const placesList = places.map( p => <PlaceLink key={p.id} place={p} deleteCity={deleteCity}/>)

    return (
        <div>
            <br/>
            <h1>Cities</h1>
            <h3>
                {placesList}
            </h3>
        </div>
    )
}

export default Places
