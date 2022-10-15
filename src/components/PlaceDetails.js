import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import AttrLink from './AttrLink'

const PlaceDetails = () => {
    const [place, setPlace] = useState({
        attractions: []
    })
    // const [attractionFormFlag, setAttractionFormFlag] = useState(false)

    const params = useParams();
  
    useEffect(() => {
        fetch(`http://localhost:9292/places/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlace(data)
        })
    }, [])

    // const addBook = (book) => {
    //     fetch('http://localhost:9292/books', {
    //         method: "POST",
    //         header: {

    //         },
    //          body: json.strigify({
        //          title: book.title,
        //          reader_id: params.id
    //})
    //     })
    // }

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
            </h3>
        </div>
    )
}

export default PlaceDetails
