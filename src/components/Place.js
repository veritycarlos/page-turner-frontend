import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Attraction from '../components/Attraction'

const Place = () => {
    const [place, setPlace] = useState({
        attractions: []
    })
    const [attractionFormFlag, setAttractionFormFlag] = useState(false)

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

    const attractions = place.attractions.map(a => <Attraction key={a.id} attraction={a} />)

    return (
        <div>
            <br/>
            <h2>{place.city}</h2>
            <hr/>
            <h3>Attractions:</h3>
            <br/>
            {attractions}
            <br/>
        </div>
    )
}

export default Place
