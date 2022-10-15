import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const AttractionDetails = () => {
    const [attraction, setAttraction] = useState({
        place:[]
    })
    const [attrs, setAttrs] = useState([])
    const params = useParams();
    const navigate = useNavigate();

  
    useEffect(() => {
        fetch(`http://localhost:9292/attractions/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAttraction(data)
        })
    }, [])

    const deleteAttraction = e => {
        fetch(`http://localhost:9292/attractions/${ params.id }`, {method: "DELETE"})
        .then(res => res.json())
        .then (data => { 
            removeAttraction(params.id)
            navigate(`/attractions`)
        })       
    }

    const removeAttraction = id => {
        setAttrs(attrs.filter( a => a.id != id))
    }
    return (
        <div>
            <br/>
            <h1>{attraction.name}</h1>
            <img src={attraction.photo} alt="icon" />
            <p>{attraction.address}</p>
            <p>City: <NavLink to={`/places/${attraction.place.id}`}>{attraction.place.city}</NavLink> </p>
            <button onClick={ () => deleteAttraction( attraction.id )}>Delete</button>
        </div>
    )
}

export default AttractionDetails
